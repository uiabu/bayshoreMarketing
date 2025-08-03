"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

interface ProgressProps {
  title: string;
  bg: string;
  border: string;
  percentage: string;
  percentageVal: string;
  percentageValpx: string;
}

const Progress = ({
  title,
  bg,
  border,
  percentage,
  percentageVal,
  percentageValpx,
}: ProgressProps) => {
  const [hasPlayed, setHasPlayed] = useState(false);
  const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        setHasPlayed(true);
      }
    },
  });

  return (
    <div ref={ref}>
      <h5 className="text-headingPrimary text-lg font-medium mb-3">{title}</h5>
      <div
        className={`h-[2rem] rounded-r-3xl rounded-l-3xl w-full ${border} relative`}
      >
        <div
          className={`absolute ${
            hasPlayed ? percentage : "w-0"
          } rounded-[4px] h-full ${bg} top-0 left-0 transition-all duration-1000 rounded-r-3xl rounded-l-3xl`}
        ></div>
        <p
          className={`absolute ${percentageValpx} z-10 top-[50%] translate-y-[-50%] font-semibold !text-[#f4f4f4] text-base`}
        >
          <span className="bg-black px-3 py-1 rounded-r-3xl rounded-l-3xl text-[10px] font-normal flex justify-center items-center">
            {percentageVal}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Progress;
