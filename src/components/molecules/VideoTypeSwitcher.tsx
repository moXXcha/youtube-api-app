import React, { useState } from "react";
import LiveButton from "@/public/live.svg";
import OnDemandButton from "@/public/onDemand.svg";
import Image from "next/image";

export const VideoTypeSwitcher = () => {
  const [test, setTest] = useState("");
  console.log(test);
  return (
    <div className="space-y-2">
      <label htmlFor="option1" className="cursor-pointer block">
        <input
          type="radio"
          id="option1"
          name="options"
          value="option1"
          className="hidden"
          onChange={(e) => setTest(e.target.value)}
        />
        <Image src={OnDemandButton} width={24} height={20} alt="aa" />
      </label>

      <label htmlFor="option2" className="cursor-pointer block">
        <input
          type="radio"
          id="option2"
          name="options"
          value="option2"
          className="hidden"
          onChange={(e) => setTest(e.target.value)}
        />
        <Image src={LiveButton} width={24} height={20} alt="aa" />
      </label>
    </div>
  );
};
