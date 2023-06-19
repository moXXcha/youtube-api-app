import React from "react";
import Home from "@/public/home.svg";
import Image from "next/image";

export const HomeButton = () => {
  return (
    <div className="border-b w-10 flex justify-center pb-2">
      <div className="cursor-pointer w-10 h-10 rounded-md flex justify-center">
        <Image src={Home} width={18} height={22} alt="home" />
      </div>
    </div>
  );
};
