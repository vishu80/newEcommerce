import React,{createContext,useState} from "react";

const userData= createContext({user:{
    name:"John Doe",
    email:"johndoe@example.com",
    role:"admin"
}})
export default userData