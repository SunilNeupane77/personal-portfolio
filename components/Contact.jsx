/**
 * Contact component renders a contact form section with a background image.
 * It includes fields for name, email, and message, and a submit button.
 *
 * @component
 * @example
 * return (
 *   <Contact />
 * )
 */
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b24925cc-9852-4e4a-b4cd-6d82155e1b4b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div>
      <div
        id="contact"
        className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
      >
        <h4 className="text-center mb-2 text-lg font-Ovo">Connect With Me</h4>
        <h2 className="text-center text-5xl font-Ovo">Get In Touch </h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          Welcome to my portfolio project , Explore a collection of project
          showcasing my expertise in different types of project ideas
        </p>
        <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
            <input
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
              type="text"
              placeholder="Enter Your Name"
              name="name"
              required
            />
            <input
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
              type="email"
              placeholder="Enter Your Email"
              name="email"
              required
            />
          </div>
          <textarea
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
            name="message"
            id=""
            rows="6"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
            type="submit"
          >
            Submit
            <Image src={assets.right_arrow_white} alt="white right arrow" className="w-4" />
         
          </button>
          <p className="mt-4">{result}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
