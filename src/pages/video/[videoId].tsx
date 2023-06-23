import { Icon } from "@/components/atoms/Icon";
import { Player } from "@/components/atoms/Player";
import { SubscriberCount } from "@/components/atoms/SubscriberCount";
import { UserId } from "@/components/atoms/UserId";
import { UserName } from "@/components/atoms/UserName";
import { VideoTitle } from "@/components/atoms/VideoTitle";
import { Layout } from "@/components/templates/Layout";
import React from "react";

const videoPlayer = () => {
  return (
    <Layout page="player">
      <div className="mx-auto w-9/12">
        <Player />
        <div className="mt-3 w-fit">
          <VideoTitle size="large" />
          <div className="flex mt-3 space-x-4">
            <Icon situation="videoPage" />
            <UserName size="large" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default videoPlayer;
