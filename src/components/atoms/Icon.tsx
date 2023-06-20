import React from "react";
import Image from "next/image";
import icon from "@/public/hinano_icon.jpeg";


export const Icon = () => {
  
  return (
    <Image
      src={icon}
      fill
      alt="icon"
      className="rounded-full"
    />
  );
};
