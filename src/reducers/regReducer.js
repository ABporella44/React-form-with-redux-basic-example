import React, { Component } from "react";
import * as types from "../actions/actionTypes"

    const reducer = (state=[],action)=>{

    switch(action.type){

        case types.newUser:
            return[
                ...state,
                Object.assign({},action.payload)
            ]
            default:
                return state;
    }
    }
export default reducer;


 /* switch(action.type){
            case types.newUser.firstname :
                return[
                    ...state,
                    Object.assign({},action.paload)
                ]
                case types.newUser.secondname :
                return[
                    ...state,
                    Object.assign({},action.paload)
                ]
                case types.newUser.userName :
                return[
                    ...state,
                    Object.assign({},action.paload)
                ]
                case types.newUser.newpassword :
                return[
                    ...state,
                    Object.assign({},action.paload)
                ]
                case types.newUser.emailaddress :
                return[
                    ...state,
                    Object.assign({},action.paload)
                ]
                case types.newUser.state :
                return[
                    ...state,
                    Object.assign({},action.paload)
                ]
                case types.newUser.pincode:
                return[
                    ...state,
                    Object.assign({},action.paload)
                ]
                case types.newUser.mobilenumber :
                return[
                    ...state,
                    Object.assign({},action.paload)
                ]
                default:
                return state;
        }*/