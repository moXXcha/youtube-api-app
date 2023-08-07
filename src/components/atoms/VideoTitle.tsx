import React from "react";

type Props = {
  size: "large" | "base";
  title: string
};

export const VideoTitle = (props: Props) => {
  return (
    <p className={`w-full ${props.size === "large" ? "text-3xl" : "text-base"}`}>
      {props.title}
    </p>
  );
};
