import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slice/cartSlice";

const AmountPrice = ({ color }) => {
  const [amount, setAmount] = useState(1);
  const { cart } = useSelector((state) => state.cart);
  const { product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const dec = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount - 1;
      if (oldAmount <= 0) {
        newAmount = 0;
      }
      return newAmount;
    });
  };
  const inc = () => {
    setAmount((oldPrice) => {
      let newPrice = oldPrice + 1;
      if (product.stock <= oldPrice) {
        newPrice = product.stock;
      }
      return newPrice;
    });
  };

  const { price, category, name, id, stock} = product;
  const { url } = product.images[0];
  return (
    <div>
      <div className="flex items-center mb-5">
        <button className="font-bold text-3xl" onClick={() => dec()}>
          -
        </button>
        <h2 className="mx-2">{amount}</h2>
        <button className="font-bold text-xl" onClick={() => inc()}>
          +
        </button>
      </div>
      <button
        className="btn btn-main"
        onClick={() =>
          dispatch(addToCart({ price, category, name, id, url, color, amount, stock }))
        }
      >
        add to cart
      </button>
    </div>
  );
};

export default AmountPrice;
