import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MENU_IMAGE_URL } from "../../Constant";
import { deleteItemFromCart } from "../../Utils/CartReducer";
export const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store?.cart);
  const handleDeleteCard = (id) => {
    dispatch(deleteItemFromCart(id));
  };

  if (items?.length == 0) return <div>You have not added any order</div>;

  return (
    <div className=" bg-[#ffe3e2] w-full min-h-screen">
      <div className="flex justify-evenly">
        <div className="w-[50%] bg-gray-50 m-3 ">
          <h1
            className=" flex justify-center  mt-4 font-serif fon-bold
                    "
          >
            {"Created Cart Item"}
          </h1>

          {items?.map((item, index) => (
            <div
              key={item?.id}
              className="shadow-xl  rounded-lg m-4 hover:bg-slate-200 "
            >
              {console.log(item)}
              <div className="p-3 ">
                <div className="flex justify-between mt-3 ">
                  <div className="relative top-0">
                    <img
                      src={MENU_IMAGE_URL + item.info?.imageId}
                      alt={item?.card?.info?.name}
                      className=" h-[150px] rounded-lg"
                    />
                    <button className=" w-[30px] h-[30px] absolute top-1 left-1/3 bg-black rounded shadow ">
                      <span className="text-white text-lg">+ </span>
                    </button>
                    <button className=" w-[30px] h-[30px] absolute bg-center top-1 left-1/2  bg-black rounded shadow">
                      <span className="text-white text-lg">- </span>
                    </button>
                  </div>
                  <div className=" flex-wrap mt-3 w-[70%]">
                    <h2>Item Name: {item?.info?.name}</h2>
                    <h2>Price: {item.info?.price / 100}</h2>
                    <h2>Description: {item.info.description}</h2>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-gray-800 w-[100px] rounded-2xl text-white text-center h-[30px] hover:bg-red-800"
                    onClick={() => handleDeleteCard(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <hr className="m-4" />
            </div>
          ))}
        </div>
        <div className="shadow-xl rounded-lg m-4  w-[30%] h-[30%]  bg-gray-50 ">
          <div className="flex justify-between m-4">
            <span>Subtotal</span>
            <span>200</span>
          </div>
          <hr className="m-4 border-t-2 border-gray-800" />
          <div className="flex justify-between m-4">
            <span>Tax (5%)</span>
            <span>200</span>
          </div>
          <hr className="m-4 border-t-2 border-gray-800" />
          <div className="flex justify-between m-4">
            <span>Shopping</span>
            <span>200</span>
          </div>
          <hr className="m-4 border-t-2 border-gray-800" />
          <div className="flex justify-between m-4">
            <span>You Save</span>
            <span>200</span>
          </div>
          <div className="flex justify-center">
            <button className="m-4 w-[300px] h-[40px] bg-[#9bcfca] text-white font-bold hover:bg-black rounded-2xl">
              Proceed to checkout
            </button>
          </div>
          {/* <hr className="m-4 border-t-2 border-gray-800"/> */}
        </div>
      </div>
    </div>
  );
};
