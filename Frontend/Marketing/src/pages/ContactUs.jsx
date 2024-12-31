import React from "react";

function ContactUs() {
  return (
    <div>
      <div className="px-5 sm:px-10 md:px-20 py-8 bg-green-50" id="contact">
        <div className="max-w-screen-xl mx-auto">
          <h3 className="leading-none font-black text-3xl mb-6">
            Contact Us 📞
          </h3>
          <form className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name 😁
              </label>
              <input
                type="text"
                id="name"
                className="w-full border bg-gray-100 px-4 py-2 mt-2 rounded"
                placeholder="Enter your name 🤗"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email 📧
              </label>
              <input
                type="email"
                id="email"
                className="w-full border bg-gray-100 px-4 py-2 mt-2 rounded"
                placeholder="Enter your email 📨"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message 💬
              </label>
              <textarea
                id="message"
                className="w-full border bg-gray-100 px-4 py-2 mt-2 rounded"
                rows="4"
                placeholder="Write your message 🤔"
              />
            </div>
            <button
              type="submit"
              className="transition-all duration-300 w-full border border-transparent rounded font-semibold tracking-wide text-sm px-5 py-4 focus:outline-none focus:shadow-outline bg-green-500 text-gray-100 hover:bg-green-600"
            >
              Send Message 📩
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
