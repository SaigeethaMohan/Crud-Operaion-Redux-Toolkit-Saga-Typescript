import { all } from 'redux-saga/effects';
import { userDetails  } from '../../types/formType'
import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeEvery } from 'redux-saga/effects'
import { userActions } from '../reducers'
import  { addUserApi, updateUserApi, getAllUserApi, getUserByIdApi, deleteUserApi}  from '../api/formApi';



function* addUser(action: PayloadAction<userDetails>):any {
    try{
        const {data} = yield call(addUserApi, action.payload)
        if(data) {
        yield put (userActions.addUserSuccess(
            data
        ))
        }
    } 
    catch (error: any) {
        yield put (userActions.formStatusFailed(
            error
        ))
    }
}

function* updateUser(action: PayloadAction<userDetails>):any {
    try{
        const {data} = yield call(updateUserApi, action.payload)
        if(data) {
        yield put (userActions.updateUserSuccess(
            data
        ))
        }
    } 
    catch (error: any) {
        yield put (userActions.formStatusFailed(
            error
        ))
    }
}

function* getUserById(action: PayloadAction<userDetails>):any {
    try{
        const {data} = yield call(getUserByIdApi, action.payload)
        if(data) {
        yield put (userActions.fetchUserByIdSuccess(
            data
        ))
        }
    } 
    catch (error: any) {
        yield put (userActions.formStatusFailed(
            error
        ))
    }
}

function* getAllUser(action: PayloadAction<userDetails>):any {
    try{
        const {data} = yield call(getAllUserApi, action.payload)
        if(data) {
        yield put (userActions.fecthAllUserSuccess(
            data
        ))
        }
    } 
    catch (error: any) {
        yield put (userActions.formStatusFailed(
            error
        ))
    }
}

function* deleteUser(action: PayloadAction<string>):any {
    try{
        
        const {data} = yield call(deleteUserApi, action.payload)
        if(data) {
        yield put (userActions.deleteUserSuccess(
           data
        ))
        }
    } 
    catch (error: any) {
        yield put (userActions.formStatusFailed(
            error.message
        ))
    }
}


export  default function* rootSaga() {
    yield takeEvery(userActions.addUserRequest.type, addUser)
    yield takeEvery(userActions.updateUserRequest.type, updateUser)
    yield takeEvery(userActions.deleteUserRequest.type, deleteUser)
    yield takeEvery(userActions.fecthAllUserRequest.type, getAllUser)
    yield takeEvery(userActions.fetchUserByIdRequest.type, getUserById)
}




