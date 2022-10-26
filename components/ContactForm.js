// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
const ContactForm= () => {
  const [state, handleSubmit] = useForm("xyyoqrbo");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
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
  );
}

export default ContactForm