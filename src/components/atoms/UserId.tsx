import React from "react";

type Props = {
  size: "small" | "base";
};
export const UserId = (props: Props) => {
  return (
    <p className={`${props.size === "base" ? "text-2xl" : "text-[12px]"}`}>
      @hinanotachiba7
    </p>
  );
};
