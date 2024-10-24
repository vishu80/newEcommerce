import { configureStore } from "@reduxjs/toolkit";
import CartReducer from'./CartReducer';
import authReducer from "./Authuser";
const Appstore=configureStore({
    reducer:{
        cart:CartReducer,
        auth:authReducer
    }
})

export default Appstore;