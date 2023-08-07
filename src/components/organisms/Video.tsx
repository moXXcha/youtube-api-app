import React from "react";
import { Thumbnail } from "../atoms/Thumbnail";
import { Icon } from "../atoms/Icon";
import { VideoTitle } from "../atoms/VideoTitle";
import { UserName } from "../atoms/UserName";
import Link from "next/link";

type Data = {
  thumbnails: {
    medium: {
      url: string
      height: number
      width: number
    }
  }
  title: string;
  videoId: string;
  channelId: string
  channelTitle: string
  description: string
}
type Props = {
  data: Data
}
export const Video = (props: Props) => {
  const link = "/video/" + props.data.videoId
  return (
    <Link
      href={link}
      className="w-80 h-56 flex flex-col items-center cursor-pointer"
    >
      <div className="w-11/12 mt-2">
        <div className="w-full h-40 rounded-md relative">
          <Thumbnail thumbnails={props.data.thumbnails.medium} />
        </div>
        <div className="w-full flex">
          {/* <div className="w-2/12">
            <Icon situation="video" />
          </div> */}
          <div className="w-full">
            <VideoTitle size="base" title={props.data.title} />
            <UserName size="base" userName={props.data.channelTitle} />
          </div>
        </div>
      </div>
    </Link>
  );
};
