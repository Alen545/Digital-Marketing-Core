import React from "react";

function HilariousServices() {
  return (
    <div>
      <div className="px-5 sm:px-10 md:px-20 py-8 bg-blue-50" id="services">
        <div className="max-w-screen-xl mx-auto">
          <h3 className="leading-none font-black text-3xl text-center mb-6">
            Our Hilarious Services 🤪
          </h3>

          {/* Top 3 Sections */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "UI/UX Design 🖌️",
                description:
                  "We create beautiful, user-friendly designs that will make your users say ‘Wow!’ 🤩.",
                icon: "🎨",
              },
              {
                title: "Web Development 🌐",
                description:
                  "Building modern, responsive websites that will make your competitors cry 😢.",
                icon: "💻",
              },
              {
                title: "Mobile App Development 📱",
                description:
                  "Developing intuitive mobile applications that will keep users glued to their screens 📲.",
                icon: "📱",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-start p-6 bg-white rounded-lg shadow-md"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <div className="font-extrabold text-2xl tracking-wide text-center">
                  {service.title}
                </div>
                <div className="text-sm text-gray-700 mt-2 text-center">
                  {service.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HilariousServices;
