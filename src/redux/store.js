import { createStore, applyMiddleware, combineReducers } from 'redux';

import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';

import { handleFetchTableData } from '../sagas/tableData';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    reducer
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(handleFetchTableData);

export default store;
