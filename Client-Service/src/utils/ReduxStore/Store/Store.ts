
import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../Slice/userSlice'
import tokenSlice from '../Slice/tokenSlice'
import postSlice from '../Slice/postSlice'
import {combineReducers } from '@reduxjs/toolkit'
import { persistReducer ,persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    whitelist: ['user','token','post'],
    storage,
  };

  const reducer= combineReducers({
    user:userSlice,
    token:tokenSlice,
    post:postSlice
  })
  
  const persistedReducer = persistReducer(persistConfig, reducer);



const Store=configureStore({
    reducer:{
       persisted:persistedReducer
    }
})


const persistor = persistStore(Store);
export { Store, persistor };
