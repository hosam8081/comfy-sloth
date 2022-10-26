import React from "react";
import { services } from "../utils/constants";
const Services = () => {
  return (
    <section className="py-24 bg-primary-50">
      <div className="container">
        <div className="md:flex justify-between items-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold flex-1">
            Custom Furniture <br />
            Built Only For You
          </h2>
          <p className="flex-1 leading-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>

        <div className="md:flex justify-between items-center md:space-x-10">
          {services.map((ser) => {
            const { icon, title, text, id } = ser;
            return (
              <div className="md:w-4/12" key={id}>
                <div className="card mb-5">
                  <div className="flex justify-center mb-5">
                    {icon}
                  </div>
                  <h3 className="font-bold text-2xl">{title}</h3>
                  <p className="leading-8">{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
