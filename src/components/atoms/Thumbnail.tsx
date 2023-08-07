import React from "react";
import Image from "next/image";
import thumbnail from "@/public/hinano.jpeg";

type Props = {
  thumbnails: {
    url: string
    height: number
    width: number
  }
}
export const Thumbnail = (props: Props) => {
  return <img src={props.thumbnails.url} alt="thumbnail" className="w-full h-full rounded-lg" />;
};
