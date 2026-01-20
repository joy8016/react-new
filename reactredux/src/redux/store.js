import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import { rootReducer } from "./Reducer";
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'

const persistConfig ={
    key:'root',
    storage,

}
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = createStore(
    persistedReducer,
    
    compose(
        applyMiddleware,
         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
   
);


export default store;