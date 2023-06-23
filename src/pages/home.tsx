import { Video } from "@/components/organisms/Video";
import { VideoList } from "@/components/organisms/VideoList";
import { Layout } from "@/components/templates/Layout";
import React from "react";

const home = () => {
  return (
    <Layout>
      <div className="w-10/12 mx-auto">
        <VideoList />
      </div>
    </Layout>
  );
};

export default home;
