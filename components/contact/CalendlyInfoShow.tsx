"use client";
import { InlineWidget } from "react-calendly";
import { useEffect } from "react";

const CalendlyInfoShow = () => {
  useEffect(() => {
    // Listen for the "event scheduled" message from Calendly
    const handleCalendlyEvent = (e: any) => {
      if (e.data.event && e.data.event === "calendly.event_scheduled") {
        window.location.href =
          "https://bayshore-marketing.vercel.app/thank-you";
      }
    };

    window.addEventListener("message", handleCalendlyEvent);

    return () => {
      window.removeEventListener("message", handleCalendlyEvent);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Mobile View */}
      <div className="md:hidden">
        <InlineWidget
          url="https://calendly.com/info-bayshorecommunication/meeting"
          styles={{
            height: "950px",
            width: "100%",
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
            height: "950px",
            width: "100%",
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
