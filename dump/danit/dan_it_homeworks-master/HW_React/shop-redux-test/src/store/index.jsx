import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {reducer as productsReducer, MODULE_NAME as productsModuleName} from './products'
import {reducer as modalReducer, MODULE_NAME as modalModuleName} from './modals';
import {reducer as formReducer, MODULE_NAME as formModuleName} from './form';

const rootReducer = combineReducers({
    [productsModuleName]: productsReducer,
    [modalModuleName]: modalReducer,
    [formModuleName]: formReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;