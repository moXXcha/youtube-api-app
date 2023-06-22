import React from "react";
import Image from "next/image";
import live from "@/public/live.svg";

export const LiveButton = () => {
  return (
    <button className="w-8 h-8 rounded-md  hover:border">
      <Image src={live} width={20} height={20} alt="live" className="mx-auto" />
    </button>
  );
};
