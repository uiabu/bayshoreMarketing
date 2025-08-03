import React from "react";

const Map = () => {
  return (
    <div>
      {/* Dummy Google Map */}
      <div className="mt-12">
        <iframe
          title="Bayshore Communications Office Location"
          className="w-full h-96 rounded-lg shadow-lg border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.630706831745!2d-82.67983058548061!3d27.751610282786543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e192a6d85b29%3A0x93c8047d0bff7cd6!2s1301%2034th%20St%20S%2C%20St.%20Petersburg%2C%20FL%2033711%2C%20USA!5e0!3m2!1sen!2sbd!4v1693000103913!5m2!1sen!2sbd"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
