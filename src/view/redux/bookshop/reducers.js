import {Buy_BOOK,Buy_PEN} from './actions';
import {  combineReducers } from 'redux';

const initialBookState ={
    numberOfBook:10
}
const initialPenState ={
    numberOfPen:15
}

 const bookReducer = (state=initialBookState,actions) => {
     switch(actions.type){
         case Buy_BOOK:
             return{
                ...state,
                numberOfBook:state.numberOfBook-1
            }
        default :
            return state
     }
    
}
 const penReducer = (state=initialPenState,actions) => {
    switch(actions.type){
        case Buy_PEN:
            return{
                ...state,
                numberOfPen:state.numberOfPen-2
           }
       default :
           return state
    }
   
}
export const rootReducer = combineReducers({
        book:bookReducer,
        pen:penReducer
    }
);

