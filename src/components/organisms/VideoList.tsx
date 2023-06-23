import React from "react";
import { Video } from "./Video";

export const VideoList = () => {
  const array = [...Array(20)];
  return (
    <div className="flex flex-wrap gap-14">
      {array.map((_) => (
        <Video />
      ))}
    </div>
  );
};
