import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import defaultState from './defaultState';
import history from './history';
import rootReducer from './rootReducer';
import sagas from './sagas';

export default function configureStore() {
    // Build the middleware for intercepting and dispatching navigation actions
    const historyMiddleware = routerMiddleware(history);
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        defaultState,
        applyMiddleware(sagaMiddleware,historyMiddleware)
    );
    sagaMiddleware.run(sagas);
    return store;
}