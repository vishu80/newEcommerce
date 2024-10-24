import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({

    name: "auth",
    initialState: {
            user:{}
    },
    reducers: {
        submitUser:((state,action)=>{
            return {
                ...state,
                user:action.payload
            }
        }),
    
    }
})
export const {submitUser}=authReducer.actions
export default authReducer