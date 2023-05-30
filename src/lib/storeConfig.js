import rootReducer from "redux/rootReducer";
import { useMemo } from "react";
import { isBrowser } from 'utils/checking';
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from "redux";

const loadState = () => {
  if (!isBrowser) return {}
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {};
  }
};
const saveState = ({ ...state }) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
  }
};

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};
function makeStore(initialState) {
  const localStorageState = loadState()
  const persistedState = localStorageState ? { ...localStorageState, ...initialState } : initialState
  let store = createStore(rootReducer(), persistedState, bindMiddleware([]));
  let before = store.getState();
  store.subscribe((e) => {
    let state = store.getState();
    let beforePair = before.pair;
    let newPair = state.pair;
    before = state
    if (JSON.stringify(beforePair) !== JSON.stringify(newPair)) return;
    saveState({
      ...state
    });
  })
  return store;
}
let newStore;

export const initializeStore = (preloadedState) => {
  let _store = newStore ?? makeStore(preloadedState)
  if (preloadedState && newStore) {
    _store = makeStore({
      ...newStore.getState(),
      ...preloadedState,
    })
    newStore = undefined
  }
  if (typeof window === 'undefined') return _store
  if (!newStore) newStore = _store
  return _store
}
export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState])
}
export const wrapper = createWrapper(makeStore, { debug: true });