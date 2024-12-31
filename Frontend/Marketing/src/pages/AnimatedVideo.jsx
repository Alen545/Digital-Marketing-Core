import React from "react";

function AnimatedVideo() {
  return (
    <div
      className="px-5 sm:px-10 md:px-20 py-8 bg-teal-50"
      id="animated-video-marketing"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Title Section */}
        <h3 className="leading-none font-black text-3xl mb-6 text-center">
          Animated Video Marketing 🎥
        </h3>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left px-2 sm:px-4">
            <h4 className="text-xl font-bold text-teal-600 mb-4">
              Bring Your Brand to Life 🎬
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              Captivate your audience with stunning animations that convey your
              brand's story and message effectively. From product demos to
              explainer videos, we’ve got you covered.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Custom Storyboarding 🎨</li>
              <li>Professional Animation 🎞️</li>
              <li>Brand-Focused Messaging 📢</li>
            </ul>
          </div>

          {/* Animated Video Section */}
          <div className="w-full">
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Animated Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedVideo;
