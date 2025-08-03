"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, Volume2 } from "lucide-react";

const ThankYou: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#FE641A] mb-4">
            Congratulations! Your Appointment Has Been Scheduled!
          </h1>
          <p className="text-gray-700 text-lg">
            I have sent you confirmation of your calls time and date via email &
            text, please make sure that you
            <br />
            put this in your calendar right now.
          </p>
          <div className="w-full max-w-md mx-auto h-px bg-gray-300 my-6"></div>
        </div>

        {/* Video Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-[#FE641A] mb-2">
            Please Watch Short Vid Below To Confirm Your Appointment 👇
          </h2>
        </div>

        {/* Video Player Container */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="relative bg-gray-900 rounded-lg overflow-hidden">
            {/* Warning Text Overlay */}
            <div className="absolute top-4 left-4 right-4 z-10 text-center">
              <div className="bg-black bg-opacity-75 rounded-lg p-4">
                <h3 className="text-white text-xl font-bold mb-2">
                  WARNING! YOUR APPOINTMENT IS NOT YET CONFIRMED!
                </h3>
                <p className="text-white text-lg">
                  IF NOT CONFIRMED IT WILL BE{" "}
                  <span className="text-red-500 font-bold underline">
                    CANCELLED!
                  </span>{" "}
                  (HERE'S HOW)
                </p>
              </div>
            </div>

            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-96 object-cover"
              onTimeUpdate={handleTimeUpdate}
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23000'/%3E%3Ctext x='400' y='225' text-anchor='middle' fill='%23fff' font-size='24'%3EVideo Player%3C/text%3E%3C/svg%3E"
            >
              <source src="/api/placeholder-video" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Controls */}
            <div className="absolute bottom-4 left-4 flex items-center space-x-4">
              {/* Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className="bg-red-600 hover:bg-red-700 rounded-full p-3 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white ml-1" />
                )}
              </button>

              {/* Volume Button */}
              <button className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors">
                <Volume2 className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Profile Image */}
            <div className="absolute bottom-4 right-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                <img
                  src="/api/placeholder/64/64"
                  alt="Presenter"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Warning Video Thumbnail */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-64 h-36 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <h3 className="text-white text-2xl font-bold z-10">
                    WARNING!
                  </h3>
                  <div className="absolute top-2 left-2 w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Attribution */}
          <div className="text-right mt-2">
            <span className="text-xs text-gray-500">IMPERIUM ACQUISITION™</span>
          </div>
        </div>

        {/* Important Note */}
        <div className="text-center">
          <p className="text-lg text-gray-700">
            <span className="font-bold text-[#FE641A]">IMPORTANT:</span> The
            "invitation from unknown sender" email may give the
            <br />
            option to click{" "}
            <span className="font-semibold text-[#FE641A]">
              'I know the sender'
            </span>{" "}
            instead of{" "}
            <span className="font-semibold text-[#FE641A]">
              'Add to calendar'
            </span>
            . If this is the
            <br />
            case, please click{" "}
            <span className="font-semibold text-[#FE641A]">
              'I know the sender'
            </span>{" "}
            button
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
