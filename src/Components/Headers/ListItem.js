import React from "react";
import "./Headers.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const ListItem = ({name}) => {
  const {items} =useSelector((state)=>state?.cart)
  return (
    <li className="px-5 text-white hover:bg-black ">
      <Link to={name=='Home'?'/':`/${name}`}>{name}{name=='Cart'?(items.length!=0? <span className="ml-1">({items?.length})</span>:''):''}</Link>
    </li>
  );
};
