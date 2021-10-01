
import { createStore,compose,applyMiddleware, combineReducers } from "redux";
import profile  from "../reducers/profile";
import regReducer from '../reducers/regReducer'
import thunk from 'redux-thunk';


const rootReducer = combineReducers({

    loginData : profile,
    userNewReg : regReducer
});

const configureStore = () =>{
    return createStore(
        rootReducer,
       compose(applyMiddleware(thunk))
    )
}

export default configureStore;