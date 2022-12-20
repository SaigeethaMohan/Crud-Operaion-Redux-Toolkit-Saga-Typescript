import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction  } from '@reduxjs/toolkit';
import { userDetails, formFields } from '../../types/formType';
import { combineReducers } from '@reduxjs/toolkit';


const initialState: formFields = {
   status: false,
   data: [],
   error: "",
   user: {}

}

const userFormSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers:{
       addUserRequest(state, action: PayloadAction<userDetails>){
        state.status = true
        
       },
       addUserSuccess(state, action: PayloadAction<userDetails>){
        state.status = false
        state.user = action.payload
       },
       updateUserRequest(state, action: PayloadAction<userDetails>){
       state.status = true
       },
       updateUserSuccess(state, action: PayloadAction<userDetails>){
        state.status = false
        state.user = action.payload
       },
       deleteUserRequest(state,  action: PayloadAction<string|number>){
        state.status = true
       },
       deleteUserSuccess(state){
        state.status = false
       },
       fecthAllUserRequest(state){
        state.status = true
       },
       fecthAllUserSuccess:(state, {payload}) => {
         state.status = false
         state.data = payload
         state.user={}
      },
       fetchUserByIdRequest(state, action: PayloadAction<string>){
        state.status = true
       },
       fetchUserByIdSuccess(state, action: PayloadAction<userDetails>){
        state.status = false
        state.user = action.payload
       },
       formStatusFailed(state, action: PayloadAction<any>){
         console.log('reducerss', action.payload.message)
        state.status = false
        state.error = action.payload
       }
    }
})

export const userActions =  userFormSlice.actions


// selectors
export const userSelector = (state: any ) => state.userDetails


//reducer
export const userReducer = userFormSlice.reducer




const rootReducer = () => combineReducers({
   userDetails: userReducer
    })
   
   export default rootReducer;
   export type State = ReturnType<typeof rootReducer>;