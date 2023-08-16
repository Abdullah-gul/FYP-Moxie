import { createSlice } from "@reduxjs/toolkit";

const initialStateValue ={
    email:"",
    token:"",
    userId:""
}
export const  userSlice =createSlice({
name:'user',
initialState :{value :initialStateValue},
reducers :{
 logInfo:(state,action)=>{
    state.value =  action.payload
 }

}
})

export const {logInfo}= userSlice.actions
export default userSlice.reducer