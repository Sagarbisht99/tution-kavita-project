"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const subjects = ["All Subjects", "Math", "Science", "SST", "English", "Hindi"];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    subject: subjects[0],
    message: "",
    mobileNumber : ""
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Your message has been sent!");
        setForm({
          name: "",
          subject: subjects[0],
          message: "",
          mobileNumber : ""
        });
      } else {
        toast.error(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc] px-4 py-16">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl items-center text-blue-700 sm:text-4xl font-bold text-center mb-2">
          Love to hear from you, Get in touch 👋
        </h1>

        <form
          className="mt-10 text-black grid grid-cols-1 gap-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium text-gray-700">
              Your name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
              <label className="text-sm font-medium text-gray-700">
              Your name
            </label>
            <input
              type="text"
              name="mobileNumber"
              value={form.mobileNumber}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />

            <label className="text-sm font-medium text-black">Subject</label>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              {subjects.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Let us know your message"
              rows={4}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
              required
            />
          </div>

          <div className="flex justify-center mt-2">
            <button
              type="submit"
              className="bg-black text-white font-semibold rounded-lg px-8 py-3 w-full md:w-auto flex items-center justify-center gap-2 hover:bg-gray-900 transition text-base"
            >
              Just Send <span className="ml-2">↗</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
