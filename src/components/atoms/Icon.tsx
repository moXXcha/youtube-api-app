import React from "react";
import Image from "next/image";
import icon from "@/public/hinano_icon.jpeg";

type Situation = "video" | "userCard" | "profile" | "videoPage";
type Props = {
  situation: Situation;
};

const getImageSizeByProps = (Situation: Situation) => {
  switch (Situation) {
    case "video": {
      return 28;
    }
    case "userCard": {
      return 32;
    }
    case "profile": {
      return 120;
    }
    case "videoPage": {
      return 60;
    }
  }
};
export const Icon = (props: Props) => {
  const imgSize = getImageSizeByProps(props.situation);
  return (
    <Image
      src={icon}
      width={imgSize}
      height={imgSize}
      alt="icon"
      className="rounded-full"
    />
  );
};
