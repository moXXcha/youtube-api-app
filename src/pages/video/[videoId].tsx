import { Icon } from "@/components/atoms/Icon";
import { Player } from "@/components/atoms/Player";
import { SubscriberCount } from "@/components/atoms/SubscriberCount";
import { UserId } from "@/components/atoms/UserId";
import { UserName } from "@/components/atoms/UserName";
import { VideoTitle } from "@/components/atoms/VideoTitle";
import { VideoDetail } from "@/components/organisms/VideoDetail";
import { Layout } from "@/components/templates/Layout";
import { useRouter } from "next/router";
import React from "react";

const videoPlayer = () => {
  const router = useRouter();
  const videoId = router.query.videoId;
  return (
    <Layout page="player">
      <VideoDetail videoId={videoId}/>
    </Layout>
  );
};

export default videoPlayer;
