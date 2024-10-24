import React, { useContext } from "react";
import "./Body.css";
import { Link } from "react-router-dom";
import userData from "../useContext/userData";

export const Card = ({ restaurant, id }) => {
  const user=useContext(userData)
  return (
    <div  key={id} className="p-3 shadow-lg  hover:bg-gray-200 ">
      <Link to={`/restaurant/${restaurant?.id}`}>
      <div className="h-[auto] w-[350px] rounded-t-[20px]   ">
        <div className="relative w-[350px] h-[150px] rounded-t-[20px]  ">
          <img
            className="w-[100%] h-[100%] rounded-t-[20px] "
            // src="https://image.shutterstock.com/image-photo/image-260nw-2505229351.jpg"
            src={
              `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` +
              restaurant?.cloudinaryImageId
            }
            alt="swiggy"
          />
          <div className="absolute bottom-3 flex justify-between w-[100%] p-3 font-bold text-slate-50">
            <span className="text-left">{restaurant?.name}</span>
            <span className="text-right">{restaurant?.avgRating}</span>
          </div>
        </div>
        <div className="flex flex-wrap text-wrap justify-between ">
          {restaurant?.cuisines?.map((item) => (
            <span  key={id}>
              {item}
            </span>
          ))}
          <span className="text-right">{restaurant?.costForTwo}</span>
        </div>
        <div className="flex flex-wrap justify-between">
          <span className="text-left">{restaurant?.areaName} </span>
          <span className="text-right">
            {restaurant?.sla?.lastMileTravelString}
          </span>
       
        </div>
       
      </div>
      </Link>
    </div>
  );
};
