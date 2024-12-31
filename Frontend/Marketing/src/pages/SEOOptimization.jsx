import React from "react";

function SEOOptimization() {
  return (
    <div>
      <div
        className="px-5 sm:px-10 md:px-20 py-8 bg-white"
        id="seo-optimization"
      >
        <div className="max-w-screen-xl mx-auto">
          <h3 className="text-3xl font-extrabold text-center mb-8">
            SEO Optimization 🚀
          </h3>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Keyword Research 📊",
                description:
                  "Discover the right keywords to drive traffic and boost your search rankings effortlessly.",
              },
              {
                title: "On-Page Optimization 🛠️",
                description:
                  "Improve your website's structure and content to enhance search engine visibility.",
              },
              {
                title: "Link Building 🔗",
                description:
                  "Increase your website's authority with high-quality backlinks from trusted sources.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-2xl font-semibold text-indigo-600 mb-3">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SEOOptimization;
