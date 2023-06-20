import React from "react";

type Size = "small" | "base" | "large";

type Props = {
  size: Size;
};

const getTextSizeByProps = (size: Size) => {
  switch (size) {
    case "small": {
      return "text-[12px]";
    }
    case "base": {
      return "text-base opacity-50";
    }
    case "large": {
      return "text-2xl";
    }
  }
};
export const UserName = (props: Props) => {
  const textStyle = getTextSizeByProps(props.size);
  return <p className={textStyle}>橘ひなの / Hinano Tachibana</p>;
};
