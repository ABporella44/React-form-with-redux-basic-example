import * as types from "./actionTypes";

const actionCreators = {
    
    username:(user)=>({
         type: types.username,
         payload: {user}
    }),

    userPassword:(password)=>({
        type:types.password,
       payload:{password}
    }) 
    
}

export default actionCreators