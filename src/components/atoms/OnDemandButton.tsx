import React from "react";
import Image from "next/image";
import onDemand from "@/public/onDemand.svg";

export const OnDemandButton = () => {
  return (
    <button className="w-8 h-8 rounded-md hover:border">
      <Image
        src={onDemand}
        width={24}
        height={24}
        alt="live"
        className="mx-auto"
      />
    </button>
  );
};
