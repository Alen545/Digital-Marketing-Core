import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const zoom = 12;

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  return (
    <div className="px-5 sm:px-10 md:px-20 py-8 bg-gray-50" id="map">
      <div className="max-w-screen-xl mx-auto">
        <h3 className="leading-none font-black text-3xl mb-6 text-center">
          Our Location 📍
        </h3>
        <div className="relative w-full h-96 sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gray-300 rounded-lg overflow-hidden">
          {/* Google Map */}
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            {mapLoaded && (
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={zoom}
              >
                <Marker position={center} />
              </GoogleMap>
            )}
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default Map;
