import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';

const middleware = applyMiddleware(thunk)

// Create store
const store = createStore(userReducer, middleware)


export default store;