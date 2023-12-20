import { configureStore } from "@reduxjs/toolkit";

// reducers
import userReducer from './user/userSlice';


const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;