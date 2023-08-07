import { Icon } from "@/components/atoms/Icon";
import { SubscriberCount } from "@/components/atoms/SubscriberCount";
import { UserId } from "@/components/atoms/UserId";
import { UserName } from "@/components/atoms/UserName";
import { ProfileTop } from "@/components/organisms/ProfileTop";
import { Video } from "@/components/organisms/Video";
import { VideoList } from "@/components/organisms/VideoList";
import { Layout } from "@/components/templates/Layout";
import { useRouter } from "next/router";
import React from "react";

const userDetail = () => {
  const router = useRouter();
  const channelId = router.query.videoId;
  const array = [...Array(20)];
  return (
    <Layout page="profile">
      <div className="w-10/12 mx-auto">
        <ProfileTop />
        <div className="mt-10">
          <VideoList />
        </div>
      </div>
    </Layout>
  );
};

export default userDetail;
