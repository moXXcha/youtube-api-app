import React from "react";
import { Player } from "../atoms/Player";
import { VideoTitle } from "../atoms/VideoTitle";
import { Icon } from "../atoms/Icon";
import { UserName } from "../atoms/UserName";

type Props = {
  videoId: string | string[] | undefined
}
export const VideoDetail = (props: Props) => {
  return (
    <div className="mx-auto w-9/12">
      <Player videoId={props.videoId} />
    </div>
  );
};
