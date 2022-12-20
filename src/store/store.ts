import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import {userReducer} from '../store/reducers'
import rootSaga from '../store/saga' 

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer:{
    userDetails: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
    export type AppDispatch = typeof store.dispatch

    export type RootState = ReturnType<typeof store.getState>

    export default store;