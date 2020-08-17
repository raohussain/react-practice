import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "./thunkTypes"
import ThunkContainer from "../../ThunkContainer"

export const initalState = {
    loading:false,
    users: [],
    error : ''
}

// export const userReducer = (state = initalState,action) =>{
//     switch(action.type){
//         case FETCH_USERS_REQUEST:
//             return{
//                 ...state,
//                 loading:true
//             }
//         case FETCH_USERS_SUCCESS:
//             return{
//                 loading:false,
//                 users: action.payload,
//                 error:''
//             }
//         case FETCH_USERS_ERROR:
//         return{
//             loading:false,
//             users: [],
//             error:action.payload
//         }
//         default: return state
//     }
// }
export const userReducer = (state = {},action) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading:false,
                users: action.payload,
                error:''
            }
        case FETCH_USERS_ERROR:
        return{
            loading:false,
            users: [],
            error:action.payload
        }
        default: return state
    }
}