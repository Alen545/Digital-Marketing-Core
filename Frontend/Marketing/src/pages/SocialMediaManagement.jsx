import React from "react";
// Import Swiper styles
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

function SocialMediaManagement() {
  return (
    <div>
      <div
        className="px-5 sm:px-10 md:px-20 py-8 bg-yellow-50"
        id="social-media-management"
      >
        <div className="max-w-screen-xl mx-auto">
          <h3 className="leading-none font-black text-3xl text-center mb-6">
            Social Media Management 📱
          </h3>

          {/* Carousel Section */}
          <div className="swiper-container">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="swiper-wrapper"
            >
              {[
                {
                  videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample video URL
                  title: "Content Creation ✍️",
                  description:
                    "Engage your audience with creative posts tailored to your brand identity.",
                },
                {
                  videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample video URL
                  title: "Platform Strategy 🎯",
                  description:
                    "Maximize your reach by implementing strategies unique to each platform.",
                },
                {
                  videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample video URL
                  title: "Analytics and Insights 📈",
                  description:
                    "Track performance metrics to refine your social media campaigns for better results.",
                },
              ].map((service, idx) => (
                <SwiperSlide key={idx} className="swiper-slide">
                  <div className="text-center mb-4">
                    {/* Video Embed */}
                    <div className="w-full h-64 sm:h-80 md:h-96 mb-4">
                      <iframe
                        width="100%"
                        height="100%"
                        src={service.videoSrc}
                        title={service.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>

                    {/* Title and Description */}
                    <h4 className="text-xl font-semibold text-blue-600 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-700">
                      {service.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaManagement;
