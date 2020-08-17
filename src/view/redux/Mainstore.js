import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {cakeReducer} from './cake/cakeReducers';
import {iceCreamReducer} from './icecream/icecreamReducers';
import {mainReducers} from './rootReducers'
import reducer from './reduxSaga/reducer'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './reduxSaga/saga';

const sagaMiddleware = createSagaMiddleware();

const Mainstore = createStore(mainReducers,applyMiddleware(thunk));
const sagastore = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
 );
sagaMiddleware.run(rootSaga);
export default Mainstore;