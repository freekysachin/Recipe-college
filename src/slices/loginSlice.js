import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isAuthenticate: false
}
export const loginSlice = createSlice({
    name: 'isLogin',
   initialState,
    reducers:{
        login: (state,action) =>{
            state.isAuthenticate = action.payload.check
        },
        logout: (state)=>{
            state.isAuthenticate = false
        }
    }
})


export const {login , logout} = loginSlice.actions
export default loginSlice.reducer