import {
  REGISTER_EMAIL_FAILURE,
  REGISTER_EMAIL_REQUEST,
  REGISTER_EMAIL_SUCCESS,

  LOGIN_EMAIL_FAILURE,
  LOGIN_EMAIL_REQUEST,
  LOGIN_EMAIL_SUCCESS,

  LOG_OUT_EMAIL_FAILURE,
  LOG_OUT_EMAIL_REQUEST,
  LOG_OUT_EMAIL_SUCCESS,

  VERIFY_EMAIL_FAILURE,
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,

  SET_PASSWORD_EMAIL_FAILURE,
  SET_PASSWORD_EMAIL_REQUEST,
  SET_PASSWORD_EMAIL_SUCCESS,
} from "./types";

const initialDataState = {
  loading: true,
  data: null,
  error: null,
};

const initialState = {
  loading: true,
  user: null,
  error: null,
};

export const userRegisterReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case REGISTER_EMAIL_REQUEST:
      return {
        loading: true,
      };
    case REGISTER_EMAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case REGISTER_EMAIL_FAILURE:
      return {
        data: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const verifyEmailReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case VERIFY_EMAIL_REQUEST:
      return {
        loading: true,
      };
    case VERIFY_EMAIL_SUCCESS:
      return {
        data: action.payload,
        error: null,
        loading: false,
      };
    case VERIFY_EMAIL_FAILURE:
      return {
        data: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const setPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PASSWORD_EMAIL_REQUEST:
      return {
        loading: true,
      };
    case SET_PASSWORD_EMAIL_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: null,
      };
    case SET_PASSWORD_EMAIL_FAILURE:
      return {
        user: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_EMAIL_REQUEST:
      return {
        loading: true,
      };
    case LOGIN_EMAIL_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: null,
      };
    case LOGIN_EMAIL_FAILURE:
      return {
        user: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const userLogoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_OUT_EMAIL_REQUEST:
      return {
        loading: true,
      };
    case LOG_OUT_EMAIL_SUCCESS:
      return {
        loading: false,
        error: null,
      };
    case LOG_OUT_EMAIL_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
