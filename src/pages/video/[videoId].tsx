import { VideoDetail } from "@/components/organisms/VideoDetail";
import { Layout } from "@/components/templates/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

const videoPlayer = () => {
  const [searchValue, setSearchValue] = useState<string>("橘ひなの")
  const [videoType, setVideoType] = useState<string>("")

  const router = useRouter();
  const videoId = router.query.videoId;
  return (
    <Layout page="player" setSearchValue={setSearchValue} setVideoType={setVideoType}>
      <VideoDetail videoId={videoId}/>
    </Layout>
  );
};

export default videoPlayer;
