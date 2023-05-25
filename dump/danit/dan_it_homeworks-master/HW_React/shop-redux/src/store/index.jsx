import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {reducer as productsReducer, MODULE_NAME as productsModuleName} from './products'
import {reducer as modalReducer, MODULE_NAME as modalModuleName} from './modals';

const rootReducer = combineReducers({
    [productsModuleName]: productsReducer,
    [modalModuleName]: modalReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;