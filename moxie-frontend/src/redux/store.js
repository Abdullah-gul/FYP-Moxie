import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import serviceReducer from './features/serviceSlice'
import storage from 'redux-persist/lib/storage'
import {persistReducer} from "redux-persist"
import { combineReducers } from 'redux'

const persistConfig={
    key : "root",
    version:1,
    storage
}
const reducer =combineReducers({
    user :userReducer,
    service:serviceReducer

})

const persistedReducer = persistReducer(persistConfig,reducer)

export const store = configureStore({
  reducer: persistedReducer,
})