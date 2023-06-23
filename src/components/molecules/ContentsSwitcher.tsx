import React from "react";
import Image from "next/image";
import { useState } from "react";
import video from "@/public/movie.svg";
import user from "@/public/user.svg";

export const ContentsSwitcher = () => {
  const [test, setTest] = useState("");
  console.log(test);
  return (
    <div className="space-x-2 flex h-6 items-center">
      <label
        className="w-14 h-6 hover:bg-slate-300 flex items-center justify-center rounded-md cursor-pointer"
        htmlFor="option1"
      >
        <input
          type="radio"
          id="option1"
          name="options"
          value="option1"
          className="hidden"
          onChange={(e) => setTest(e.target.value)}
        />
        <Image src={video} width={20} height={14} alt="aa" />
      </label>

      <label
        className="w-14 h-6 hover:bg-slate-300 mt-0 flex items-center justify-center rounded-md cursor-pointer"
        htmlFor="option2"
      >
        <input
          type="radio"
          id="option2"
          name="options"
          value="option2"
          className="hidden"
          onChange={(e) => setTest(e.target.value)}
        />
        <Image src={user} width={12} height={18} alt="aa" />
      </label>
    </div>
  );
};
