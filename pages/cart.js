import React, { useEffect } from "react";
import { PageHero } from "../components";
import Link from "next/link";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, totalAmount } from "../slice/cartSlice";
import { formatPrice } from "../utils/helpers";
const cart = () => {
  const {cart, total, fee} = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(totalAmount())
  }, [cart])
  if (cart.length == 0) {
    return (
      <div>
        <div className="container text-center h-[calc(100vh_-_10rem)] flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-5xl capitalize">you cart item is empty</h2>
          <Link href="/products">
            <a className="btn btn-main mt-5">fill it</a>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <PageHero title="cart" />
      <div className="container mt-10">
        <div className="grid gap-20 mb-5 grid-cols-cartHeader">
          <h3>items</h3>
          <h3>price</h3>
          <h3>Quantity</h3>
        </div>
        {cart.map((cartItem) => {
          return <CartItem key={cartItem.id + cartItem.color} {...cartItem} />;
        })}
        <div className="flex justify-between mt-10 flex-wrap">
          <Link href="/products">
            <a className="btn btn-main">continue shopping</a>
          </Link>
          <button className="btn btn-main" onClick={() => dispatch(clearCart())}>clear shopping cart</button>
        </div>

        <div className="md:flex md:justify-end my-10 items-center">
          <div className="px-10 sm:px-20 py-4 border">
            <div className="flex justify-between items-center flex-wrap">
              <p>Subtotal :</p>
              <span>{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between items-center flex-wrap">
              <p>Shipping Fee :</p>
              <span>{formatPrice(fee)}</span>
            </div>
            <hr />
            <div className="flex justify-between items-center my-5 flex-wrap">
              <h3 className="text-3xl">order total :</h3>
              <h3 className="text-3xl">{formatPrice(total - fee)}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cart;
