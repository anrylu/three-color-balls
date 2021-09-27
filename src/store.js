import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';

let middlewareList = [thunk];
middlewareList.push(createLogger({ collapsed: true, diff: true }));
const middleware = applyMiddleware(...middlewareList);

export default createStore(reducer, middleware);
