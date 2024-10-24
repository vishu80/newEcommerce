import React, { useState, useEffect } from "react";
import { MENU_IMAGE_URL } from "../../Constant";
import { useParams } from "react-router-dom";
import useOnline from "../../CustomHooks/useOnline";
import useResturantdata from "../../CustomHooks/useResturantdata";
import { addToCart,deleteCard } from "../../Utils/CartReducer";
import { useDispatch } from "react-redux";
const MenuDetails = () => {
  const { restId } = useParams();
  const dispatch=useDispatch()
  const checkOnline = useOnline();
  const { name, menuCardDetails } = useResturantdata(restId);

  if (checkOnline) return <h1>No Internet Connection</h1>;
  const handleAddCardItem=(item)=>{
    dispatch(addToCart(item?.card))
  }

  const handleDeleteCard=(item)=>{
    dispatch(deleteCard(item?.card?.info?.id))
  }

  console.log(menuCardDetails,'menudetails')
  return (
    <div className="flex justify-center mt-2 bg-red-50">
      <div className="w-[50%] bg-gray-50">
        <h1 className="text-center  font-extrabold">{name}</h1>
        <h1 className="text-center mt-3 font-semibold ">{name}</h1>
        <div className="flex justify-between pt-3 pl-3	">
                <span className="font-bold text-2xl"> Recommended ({menuCardDetails?.length}) </span>
                {/* <span>button</span> */}
              </div>
        {menuCardDetails?.map((item) => (
          <div key={item?.id} className=" rounded-lg">
            <div className="p-3 ">
            
              <div className="flex justify-between mt-3">
                <div className=" flex-wrap mt-3 w-[70%]">
                  <h2 >Item Name: {item?.card.info?.name}</h2>
                  <h2>Price: {item.card.info?.price / 100}</h2>
                  <h2>Description: {item.card.info.description}</h2>
                </div>
                <div className="relative top-0">
                  <img
                    src={MENU_IMAGE_URL + item.card.info?.imageId}
                    alt={item?.card?.info?.name}
                    className="w-[150px] h-[150px] rounded-lg"
                  />
                  <button className=" w-[30px] h-[30px] absolute top-1 left-1/3 bg-black rounded shadow "
                    onClick={()=>handleAddCardItem(item)}
                  >
                    <span className="text-white text-lg">+ </span>
                  </button>
                  <button className=" w-[30px] h-[30px] absolute bg-center top-1 left-1/2  bg-black rounded shadow"
                    onClick={()=>handleDeleteCard(item)}
                  >
                    <span className="text-white text-lg">- </span>
                  </button>
                </div>
              </div>
            </div>
            < hr className="ml-4 mr-4" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MenuDetails;
