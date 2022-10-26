import React from "react";
import ContactForm from "./ContactForm";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xyyoqrbo");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section className="py-24">
      <div className="container">
        <div className="justify-between items-center md:space-x-10 md:flex">
          <div className="flex-1">
            <h3 className="text-2xl font-bold">
              Join our newsletter and get 20% off
            </h3>
            <p className="leading-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              sint unde quaerat ratione soluta veniam provident adipisci cumque
              eveniet tempore?
            </p>
          </div>
          <div className="flex-1 ">
            <form onSubmit={handleSubmit} className="">
              <div className="flex">
              <input
                type="text"
                name="email"
                className="w-4/5 p-2"
                placeholder="enter email"
              />
              <button className="btn-main p-4" disabled={state.submitting}>Subcribe</button>
              </div>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
