import React from "react";
import { PageHero } from "../components";
const about = () => {
  return (
    <div>
      <PageHero title="about" />
      <div className="py-24">
        <div className="container">
          <div className="justify-between md:flex md:space-x-10">
            <div className="md:w-6/12">
              <img src="./landingpage.jpeg" className="w-full h-[500px]" />
            </div>
            <div className="md:w-6/12">
              <h2 className="text-2xl md:text-4xl font-bold">
                Featured Products
                <span className="w-20 h-1 bg-main mt-5 block"></span>
              </h2>
              <p className="leading-9">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                accusantium sapiente tempora sed dolore esse deserunt eaque
                excepturi, delectus error accusamus vel eligendi, omnis beatae.
                Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
                dolore, obcaecati incidunt sequi blanditiis est exercitationem
                molestiae delectus saepe odio eligendi modi porro eaque in
                libero minus unde sapiente consectetur architecto. Ullam rerum,
                nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed
                quos similique amet. Ex, voluptate accusamus nesciunt totam
                vitae esse iste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
