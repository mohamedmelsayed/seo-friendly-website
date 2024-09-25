// app/components/Map.tsx
import React from 'react';

const Map = () => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4 text-primary">Our Location</h2>
      <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.085499748716!2d144.95565131531805!3d-37.81720997975127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c6c4f67b9170!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1619322022829!5m2!1sen!2sau"
          width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
