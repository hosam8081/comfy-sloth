import React from "react";
import Link from "next/link";
const LandingPage = () => {
  return (
    <div className="py-24">
      <div className="container">
        <div className="md:flex justify-between md:space-x-10">
          <div className="md:w-6/12">
            <h1 className="text-2xl md:text-5xl font-bold">
              Design Your <br />
              Comfort Zone
            </h1>
            <p className="leading-8 text-gray-600 text-lg max-w-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              at sed omnis corporis doloremque possimus velit! Repudiandae nisi
              odit, aperiam odio ducimus, obcaecati libero et quia tempora
              excepturi quis alias?{" "}
            </p>
            <Link href="/product">
              <a className="btn btn-main">shop now </a>
            </Link>
          </div>
          <div className="md:w-6/12">
            <img
              src="landingpage.jpeg"
              alt="landingpage"
              className="w-full md:h-[550px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
