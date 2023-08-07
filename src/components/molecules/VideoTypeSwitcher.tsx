import React, { useEffect, useState } from "react";
import LiveButton from "@/public/live.svg";
import OnDemandButton from "@/public/onDemand.svg";
import Image from "next/image";

type Props = {
  setVideoType: React.Dispatch<React.SetStateAction<string>>
}
export const VideoTypeSwitcher = (props: Props) => {
  const [test, setTest] = useState("");

  useEffect(() => {
    props.setVideoType(test)
    console.log(test)
  },[test])

  return (
    <div className="space-y-2">
      <label htmlFor="option1" className={`w-8 h-8 rounded-lg cursor-pointer flex justify-center items-center ${test === "" ? "bg-primary" : ""}`}>
        <input
          type="radio"
          id="option1"
          name="options"
          value=""
          className="hidden"
          onChange={(e) => setTest(e.target.value)}
        />
        <Image src={OnDemandButton} width={24} height={20} alt="aa" />
      </label>

      <label htmlFor="option2" className={`w-8 h-8 rounded-lg cursor-pointer flex justify-center items-center ${test !== "" ? "bg-primary" : ""}`}>
        <input
          type="radio"
          id="option2"
          name="options"
          value="&eventType=live"
          className="hidden"
          onChange={(e) => setTest(e.target.value)}
        />
        <Image src={LiveButton} width={24} height={20} alt="aa" />
      </label>
    </div>
  );
};
