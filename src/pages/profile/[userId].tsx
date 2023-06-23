import { Icon } from "@/components/atoms/Icon";
import { SubscriberCount } from "@/components/atoms/SubscriberCount";
import { UserId } from "@/components/atoms/UserId";
import { UserName } from "@/components/atoms/UserName";
import { Video } from "@/components/organisms/Video";
import { VideoList } from "@/components/organisms/VideoList";
import { Layout } from "@/components/templates/Layout";
import React from "react";

const userDetail = () => {
  const array = [...Array(20)];
  return (
    <Layout page="profile">
      <div className="w-10/12 mx-auto">
        <div className="flex items-center w-full">
          <Icon situation="profile" />
          <div className="ml-5">
            <UserName size="large" />
            <UserId size="base" />
            <SubscriberCount size="base" />
          </div>
        </div>
        <div className="mt-10">
          <VideoList />
        </div>
      </div>
    </Layout>
  );
};

export default userDetail;
