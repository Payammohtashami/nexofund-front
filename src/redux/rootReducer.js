import { combineReducers } from "redux";
import { 
    userLoginReducer,
    userLogoutReducer,
    setPasswordReducer,
    verifyEmailReducer,
    userRegisterReducer, 
} from "./store/user/reducer";

const rootReducer = combineReducers({
    userLoginReducer,
    userLogoutReducer,
    setPasswordReducer,
    verifyEmailReducer,
    userRegisterReducer,
});

export default rootReducer;