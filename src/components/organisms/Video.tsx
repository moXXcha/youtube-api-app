import React from "react";
import { Thumbnail } from "../atoms/Thumbnail";
import { Icon } from "../atoms/Icon";
import { VideoTitle } from "../atoms/VideoTitle";
import { UserName } from "../atoms/UserName";
import Link from "next/link";

export const Video = () => {
  return (
    <Link
      href="/video/1"
      className="w-80 h-56 flex flex-col items-center cursor-pointer"
    >
      <div className="w-11/12 mt-2">
        <div className="w-full h-40 rounded-md relative">
          <Thumbnail />
        </div>
        <div className="w-full flex">
          <div className="w-2/12">
            <Icon situation="video" />
          </div>
          <div className="w-10/12">
            <VideoTitle size="base" />
            <UserName size="base" />
          </div>
        </div>
      </div>
    </Link>
  );
};
