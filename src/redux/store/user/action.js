import axios from "axios";
import api from "config/api";
import routes from "config/routes";
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
import { toast } from "react-hot-toast";


export const registerUserRequest = () => {
  return {
    type: REGISTER_EMAIL_REQUEST,
  };
};
export const registerUserSuccess = (users) => {
  return {
    type: REGISTER_EMAIL_SUCCESS,
    payload: users,
  };
};
export const registerUserFailure = (error) => {
    return {
        type: REGISTER_EMAIL_FAILURE,
        payload: error,
    };
};
export const registerUser = (data, setStep) => {
    return (dispatch) => {
        dispatch(registerUserRequest());
        axios.post(api.auth.registerEmail, data, {withCredentials: true})
        .then((response) => {
            dispatch(registerUserSuccess(response.data));
            setStep('CONFIRM_CODE')
        })
        .catch((error) => dispatch(registerUserFailure(error.message)));
    };
};



export const verifyEmailRequest = () => {
  return {
    type: VERIFY_EMAIL_REQUEST,
  };
};
export const verifyEmailSuccess = (users) => {
  return {
    type: VERIFY_EMAIL_SUCCESS,
    payload: users,
  };
};
export const verifyEmailFailure = (error) => {
    return {
        type: VERIFY_EMAIL_FAILURE,
        payload: error,
    };
};
export const verifyEmail = (data, setStep) => {
    return (dispatch) => {
        dispatch(registerUserRequest());
        axios.post(api.auth.verifyEmail, data, {withCredentials: true})
        .then((response) => {
            dispatch(verifyEmailSuccess(response.data));
            setStep('SET_PASSWORD');
        })
        .catch((error) => dispatch(verifyEmailFailure(error.message)));
    };
};



export const setPasswordmEmailRequest = () => {
  return {
    type: SET_PASSWORD_EMAIL_REQUEST,
  };
};
export const setPasswordmEmailSuccess = (users) => {
  return {
    type: SET_PASSWORD_EMAIL_SUCCESS,
    payload: users,
  };
};
export const setPasswordmEmailFailure = (error) => {
    return {
        type: SET_PASSWORD_EMAIL_FAILURE,
        payload: error,
    };
};
export const setPasswordmEmail = (data, router) => {
    return (dispatch) => {
        dispatch(setPasswordmEmailRequest());
        axios.post(api.auth.verifyEmail, data, {withCredentials: true})
        .then((response) => {
            dispatch(setPasswordmEmailSuccess(response.data));
            toast.success('Successfully Register!')
            router(routes.base);
        })
        .catch((error) => dispatch(setPasswordmEmailFailure(error.message)));
    };
};



export const loginRequest = () => {
  return {
    type: LOGIN_EMAIL_REQUEST,
  };
};
export const loginSuccess = (users) => {
  return {
    type: LOGIN_EMAIL_SUCCESS,
    payload: users,
  };
};
export const loginFailure = (error) => {
    return {
        type: LOGIN_EMAIL_FAILURE,
        payload: error,
    };
};
export const login = (data, router) => {
    return (dispatch) => {
        dispatch(loginRequest());
        axios.post(api.auth.verifyEmail, data, {withCredentials: true})
        .then((response) => {
            dispatch(loginSuccess(response.data));
            toast.success('Successfully Login!')
            router(routes.base);
        })
        .catch((error) => dispatch(loginFailure(error.message)));
    };
};



export const logoutRequest = () => {
  return {
    type: LOG_OUT_EMAIL_REQUEST,
  };
};
export const logoutSuccess = (users) => {
  return {
    type: LOG_OUT_EMAIL_SUCCESS,
    payload: users,
  };
};
export const logoutFailure = (error) => {
    return {
        type: LOG_OUT_EMAIL_FAILURE,
        payload: error,
    };
};
export const logout = (data, router) => {
    return (dispatch) => {
        dispatch(logoutRequest());
        axios.post(api.auth.verifyEmail, data, {withCredentials: true})
        .then((response) => {
            dispatch(logoutSuccess(response.data));
            toast.success('Successfully Logout!')
            router(routes.base);
        })
        .catch((error) => dispatch(logoutFailure(error.message)));
    };
};