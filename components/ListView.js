import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { formatPrice } from "../utils/helpers";
const ListView = ({ id, name, price, image, description }) => {
  return (
    <>
      <div className="">
        <div className="sm:flex mt-10 sm:space-x-5 ">
          <div className="w-full">
          <img
            src={image}
            alt="produce"
            className="h-44 object-cover block rounded w-[500px]"
          />
          </div>
          <div>
            <p className="text-gray-100 capitalize text-lg mt-0">{name}</p>
            <span className="text-main">{formatPrice(price)}</span>
            <p>{description}</p>
            <div>
              <Link href={"/product/" + id}>
                <a className="btn btn-main py-0">details</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListView;
