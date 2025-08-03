"use client";
import { InlineWidget } from "react-calendly";

const CalendlyInfoShow = () => {
  return (
    <div className="w-full">
      {/* Mobile View */}
      <div className="md:hidden">
        <InlineWidget
          url="https://calendly.com/info-bayshorecommunication/meeting"
          styles={{
            height: "600px",
            width: "100%", // Ensures full width on mobile
          }}
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "#0b7788",
            textColor: "4d5055",
          }}
        />
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <InlineWidget
          url="https://calendly.com/info-bayshorecommunication/meeting"
          styles={{
            height: "800px",
            width: "100%", // Ensures full width on desktop
          }}
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "#0b7788",
            textColor: "4d5055",
          }}
        />
      </div>
    </div>
  );
};

export default CalendlyInfoShow;
