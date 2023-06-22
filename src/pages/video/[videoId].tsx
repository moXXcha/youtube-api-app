import { Icon } from "@/components/atoms/Icon";
import { Player } from "@/components/atoms/Player";
import { SubscriberCount } from "@/components/atoms/SubscriberCount";
import { UserId } from "@/components/atoms/UserId";
import { UserName } from "@/components/atoms/UserName";
import { VideoTitle } from "@/components/atoms/VideoTitle";
import { MainContents } from "@/components/templates/MainContents";
import { SearchArea } from "@/components/templates/SearchArea";
import { Sidebar } from "@/components/templates/Sidebar";
import React from "react";

const videoPlayer = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-10/12 mx-auto">
          <SearchArea page="player" />
          <MainContents>
            <div className="flex justify-center">
              <div className="">
                <Player />
                <div className="w-11/12 mx-auto mt-3">
                  <VideoTitle size="large" />
                  <div className="flex mt-3 mb-6">
                    <Icon situation="videoPage" />
                    <UserName size="large" />
                  </div>
                </div>
              </div>
            </div>
          </MainContents>
        </div>
      </div>
    </div>
  );
};

export default videoPlayer;
