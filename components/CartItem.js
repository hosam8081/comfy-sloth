import React from "react";
import { formatPrice } from "../utils/helpers";
import { ImBin2 } from "react-icons/im";
import { AiOutlineMinus } from "react-icons/ai";
import { removeItem, increment, decrement } from "../slice/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ price, id, url, amount, name, color, total }) => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-cart gap-20 text-left items-center mb-5">
      <div className="grid grid-cols-[100px_200px] gap-5 text-left">
        <img className="rounded-lg" src={url} alt="" />
        <div>
          <h3 className="font-bold capitalize">{name}</h3>
          <p className="mt-2">
            color :{" "}
            <span
              className="h-4 w-4 rounded-full inline-block opacity-70"
              style={{ backgroundColor: `${color}` }}
            ></span>{" "}
          </p>
        </div>
      </div>
      <h3 className="text-main">{formatPrice(price)}</h3>
      <div className="flex justify-center ">
        <button
          className="flex-1 text-left text-2xl font-bold"
          onClick={() => dispatch(decrement(`${id + color}`))}
        >
          <AiOutlineMinus />
        </button>
        <span className="flex-auto text-left text-2xl font-bold">{amount}</span>
        <button
          className="flex-1 text-left text-2xl font-bold"
          onClick={() => dispatch(increment(`${id + color}`))}
        >
          +
        </button>
      </div>
      <button
        className="text-red-500 font-bold text-xl"
        onClick={() => dispatch(removeItem(`${id + color}`))}
      >
        <ImBin2 />
      </button>
    </div>
  );
};

export default CartItem;
