import React from "react";

function Features() {
  return (
    <div>
      <div
        className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 bg-white"
        id="features"
      >
        <div className="max-w-screen-xl mx-auto">
          <h3 className="text-3xl font-extrabold text-center mb-8">
            Our Features 🤩
          </h3>
          <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Amazing People 🤗",
                description:
                  "We guarantee that every designer you ever work with will be an awesome member for your team 🤝.",
                icon: "fas fa-users", // Using Font Awesome icons
                iconColor: "text-indigo-500",
              },
              {
                title: "Best Rates 💸",
                description:
                  "We monitor trends to ensure that you always get the best rates 💵. Money matters, but so does fun!",
                icon: "fas fa-dollar-sign", // Font Awesome icon
                iconColor: "text-green-500",
              },
              {
                title: "Abuse Protection 🛡️",
                description:
                  "Money is held by us in escrow 💼, and customer service reviews any disputes personally. We're always on guard! ⚔️",
                icon: "fas fa-shield-alt", // Font Awesome icon
                iconColor: "text-red-500",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`p-4 inline-block rounded-full ${feature.iconColor}`}
                >
                  <i className={`${feature.icon} text-3xl`}></i> {/* Icon */}
                </div>
                <h4 className="mt-4 text-xl font-semibold text-center">
                  {feature.title}
                </h4>
                <p className="mt-2 text-center text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
