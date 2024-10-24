import React,{useContext} from "react";
import "./Headers.css";
import { ListItem } from "./ListItem";
import userData from "../useContext/userData";
import { Link } from "react-router-dom";
export const Headers = () => {
  const {authstatus}=useContext(userData)
  return (
    <div className="p-1">
      <div className="flex justify-between items-center bg-[#564db9]">
        <img
          className="w-20"
          src="https://image.shutterstock.com/image-photo/image-260nw-2505229351.jpg"
          alt="swiggy"
        />
        <ol className="flex items-center">
          <ListItem name={'Home'}/>
          <ListItem name={'About'}/> 
          <ListItem name={'Contact'}/>
          <ListItem name={'Grocery'}/>
          <ListItem name={'Cart'}/>
          <ListItem name={'Login'}/>



        </ol>
        <Link
        to={'/signup'}>
        <button className="w-24 h-10 border-2 rounded text-centre text-white">
          Sign
        </button>
        </Link>
      </div>
    </div>
  );
};
