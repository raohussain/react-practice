import { combineReducers } from "redux";
import {cakeReducer} from './cake/cakeReducers';
import {iceCreamReducer} from './icecream/icecreamReducers';
import {userReducer} from './reduxThunk/thunkReducers'
import reducer from './reduxSaga/reducer';

export const mainReducers = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    thunk:userReducer
    }
);
// export const reducer = combineReducers({
    
//     }
// );

export default mainReducers;