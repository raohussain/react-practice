import { createStore } from 'redux';
import {rootReducer} from './redux/bookshop/reducers';
// const rootReducer = combineReducers(bookReducer,penReducer);
const bookStore = createStore(rootReducer);

export default bookStore;