import React from "react";
import Image from "next/image";
import video from "@/public/movie.svg";

export const VideoButton = () => {
  return (
    <button className="w-16 h-6 rounded-md hover:bg-secoundary">
      <Image
        src={video}
        width={20}
        height={14}
        alt="video"
        className="mx-auto"
      />
    </button>
  );
};
