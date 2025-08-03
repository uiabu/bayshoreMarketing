"use client"; // Add this directive at the top

import React, { useRef } from "react";
// Install the package with: yarn add @emailjs/browser
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  interface SendEmailEvent extends React.FormEvent<HTMLFormElement> {}

  const sendEmail = (e: SendEmailEvent): void => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        form.current as HTMLFormElement,
        "your_user_id" // Replace with your EmailJS user/public key
      )
      .then(
        () => toast.success("Message sent successfully!"),
        () => toast.error("Failed to send message. Try again.")
      );

    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className=" py-12 container">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Left contact info */}
        <div className="space-y-8 text-[#2F2F2F] col-span-2">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#FE641A] rounded-full text-white">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="font-semibold">Number</p>
              <p>+1 (509) 592-1745</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#FE641A] rounded-full text-white">
              <FaEnvelope />
            </div>
            <div>
              <p className="font-semibold">Email Address</p>
              <p>neel@bayshorecommunication.org</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#FE641A] rounded-full text-white">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="font-semibold">Office Location Address</p>
              <p>1301 34th ST South, St. Petersburg FL 33711</p>
            </div>
          </div>
        </div>

        {/* Right form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4 col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              required
              className="p-3 border rounded w-full border-[#E1E1E1] bg-[#F4F4F4]"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="p-3 border rounded w-full border-[#E1E1E1] bg-[#F4F4F4]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="p-3 border rounded w-full border-[#E1E1E1] bg-[#F4F4F4]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Your Subject"
              className="p-3 border rounded w-full border-[#E1E1E1] bg-[#F4F4F4]"
            />
          </div>
          <textarea
            name="message"
            placeholder="Write A Message"
            required
            rows={5}
            className="p-3 border rounded w-full border-[#E1E1E1] bg-[#F4F4F4]"
          ></textarea>
          <button className="inline-block bg-[#FE641A] text-white px-8  py-3  text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
            Send Message <span className="text-xl"> »</span>
          </button>
        </form>
      </div>

      {/* Toasts */}
      <ToastContainer position="top-right" />
    </section>
  );
};

export default ContactForm;
