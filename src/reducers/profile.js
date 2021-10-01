import * as types from "../actions/actionTypes"



const reducer =(state=[],action)=>{
    switch(action.type){
         case types.username:
            return [
                ...state,
                Object.assign({},action.payload)
            ]
        case types.password:
            return [
                ...state,
                Object.assign({},action.payload)
            ]    
            default:
                return state;
    }
    
}
export default reducer