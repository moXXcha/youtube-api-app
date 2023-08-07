import { VideoList } from "@/components/organisms/VideoList";
import { Layout } from "@/components/templates/Layout";
import React, { useState } from "react";

const home = () => {
  const [searchValue, setSearchValue] = useState<string>("橘ひなの")
  const [videoType, setVideoType] = useState<string>("")
  console.log(videoType)
  return (
    <Layout setSearchValue={setSearchValue} setVideoType={setVideoType}>
      <div className="w-10/12 mx-auto">
        <VideoList searchValue={searchValue} videoType={videoType} />
      </div>
    </Layout>
  );
};

export default home;
