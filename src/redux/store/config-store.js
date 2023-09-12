// import { applyMiddleware, combineReducers, compose } from 'redux';
// import { legacy_createStore as createStore } from 'redux';
// import { thunkMiddleware } from 'redux-thunk';
// import rootReducer from '../reducers';
// import { configureStore } from '@reduxjs/toolkit';
// import AuthReducer from '../reducers/Auth';
// import { createLogger } from 'redux-logger';

// // Khởi tạo store
// const logger = createLogger();

// const store = createStore(
//     combineReducers({ AuthReducer }),
//     {},
//     applyMiddleware(logger, thunkMiddleware)
// );


// // Export store
// export default store;


import thunk from 'redux-thunk';
import AuthReducer from '../reducers/Auth';
import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware, combineReducers, compose } from 'redux';

const AppReducers = combineReducers({
    AuthReducer,
});

const rootReducer = (state, action) => {
    return AppReducers(state, action);
}
let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;