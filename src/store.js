import {createStore, applyMiddleware} from 'redux';
import {userReducer} from './reducer';
import createSagaMiddleware from 'redux-saga';
import {watcherSaga} from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(userReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

export default store;