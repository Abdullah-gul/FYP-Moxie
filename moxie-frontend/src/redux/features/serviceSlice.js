import { createSlice } from "@reduxjs/toolkit";

const initialStateValue ={
   
    clientId:"",
    user1:"",
    singleServiceId:""   //this is for single user when client click on any  div 
}
export const  serviceSlice =createSlice({
name:'service',
initialState :{value :initialStateValue},
reducers :{
 userInfo:(state,action)=>{
    state.value =  action.payload
 }

}
})

export const {userInfo}= serviceSlice.actions
export default serviceSlice.reducer