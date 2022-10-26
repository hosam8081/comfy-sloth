import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import Loading from "./Loading";
import Product from "./Product";
const FeaturedProduct = () => {
  const { loading, error, products } = useSelector((state) => state.products);
  const router = useRouter();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    router.push("/404");
  }
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold">Featured Products</h2>
          <div className="flex justify-center mt-5">
            <span className="w-20 h-1 bg-main block"></span>
          </div>
        </div>
        <div className="justify-between items-center md:flex">
          {products.slice(0, 3).map((product) => {
            return (
             <Product key={product.id} {...product}/>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
