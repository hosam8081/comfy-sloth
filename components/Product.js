import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { formatPrice } from "../utils/helpers";
const Product = ({ id, name, price, image }) => {
  return (
    <>
      <div className="md:w-6/12 lg:w-4/12 px-4" >
        <div className="relative">
          <img
            src={image}
            alt="produce"
            className="h-44 object-cover block w-full rounded"
          />
          <Link href={'/product/' + id}>
            <a className="absolute top-1/2 left-1/2 bg-main p-2 rounded-full -translate-x-1/2 -translate-y-1/2 z-20">
              <AiOutlineSearch />
            </a>
          </Link>
          <div className="absolute top-0 left-0 w-full h-full hover:bg-overlay z-10"></div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-100 capitalize text-lg">{name}</p>
          <span className="text-main">{formatPrice(price)}</span>
        </div>
      </div>
    </>
  );
};

export default Product;
