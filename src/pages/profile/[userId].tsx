import { ProfileTop } from "@/components/organisms/ProfileTop";
import { VideoList } from "@/components/organisms/VideoList";
import { Layout } from "@/components/templates/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

const userDetail = () => {
  const router = useRouter();
  const channelId = router.query.videoId;
  const array = [...Array(20)];

  const [searchValue, setSearchValue] = useState<string>("橘ひなの");
  const [videoType, setVideoType] = useState<string>("");

  return (
    <Layout
      page="profile"
      setSearchValue={setSearchValue}
      setVideoType={setVideoType}
    >
      <div className="w-10/12 mx-auto">
        <ProfileTop />
        <div className="mt-10">
          <VideoList searchValue={searchValue} videoType={videoType} />
        </div>
      </div>
    </Layout>
  );
};

export default userDetail;
