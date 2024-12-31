import React from "react";

function GoalsSections() {
  return (
    <div>
      {/* Goals Section */}
      <div className="py-8 px-5 sm:px-10 md:px-20 bg-white" id="goals-section">
        <div className="max-w-screen-xl mx-auto">
          {/* Title Section */}
          <h3 className="text-3xl font-bold text-center mb-8">
            Achieve All Your Goals in One Place 🚀
          </h3>

          {/* Star Section (First 3 Goals) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {/* Single Goal */}
            <div className="flex flex-col items-center gap-4 p-4 bg-gray-50 rounded shadow hover:shadow-lg transition-shadow">
              <div className="text-teal-600 text-3xl">
                <i className="fas fa-chart-line"></i> {/* Icon */}
              </div>
              <h4 className="font-bold text-lg mb-2 text-center">
                Maximise Leads and Conversions
              </h4>
              <p className="text-sm text-gray-700 text-center">
                Get better quality leads and enhance conversions.
              </p>
            </div>
            {/* Single Goal */}
            <div className="flex flex-col items-center gap-4 p-4 bg-gray-50 rounded shadow hover:shadow-lg transition-shadow">
              <div className="text-teal-600 text-3xl">
                <i className="fas fa-shopping-cart"></i> {/* Icon */}
              </div>
              <h4 className="font-bold text-lg mb-2 text-center">
                Increase Online Sales
              </h4>
              <p className="text-sm text-gray-700 text-center">
                Show up where shoppers are and increase site traffic and sales.
              </p>
            </div>
            {/* Single Goal */}
            <div className="flex flex-col items-center gap-4 p-4 bg-gray-50 rounded shadow hover:shadow-lg transition-shadow">
              <div className="text-teal-600 text-3xl">
                <i className="fas fa-store"></i> {/* Icon */}
              </div>
              <h4 className="font-bold text-lg mb-2 text-center">
                Drive In-Store Foot Traffic
              </h4>
              <p className="text-sm text-gray-700 text-center">
                Bring people through your doors and increase offline sales.
              </p>
            </div>
          </div>

          {/* Section 2 (Remaining 2 Goals) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Single Goal */}
            <div className="flex flex-col items-center gap-4 p-4 bg-gray-50 rounded shadow hover:shadow-lg transition-shadow">
              <div className="text-teal-600 text-3xl">
                <i className="fas fa-bullhorn"></i> {/* Icon */}
              </div>
              <h4 className="font-bold text-lg mb-2 text-center">
                Show Your Brand to More People
              </h4>
              <p className="text-sm text-gray-700 text-center">
                Put your brand out there to increase reach and engagement.
              </p>
            </div>
            {/* Single Goal */}
            <div className="flex flex-col items-center gap-4 p-4 bg-gray-50 rounded shadow hover:shadow-lg transition-shadow">
              <div className="text-teal-600 text-3xl">
                <i className="fas fa-mobile-alt"></i> {/* Icon */}
              </div>
              <h4 className="font-bold text-lg mb-2 text-center">
                Market Your App to New Users
              </h4>
              <p className="text-sm text-gray-700 text-center">
                Put your app in front of the right users to drive downloads and
                engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoalsSections;
