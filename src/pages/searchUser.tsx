import { UserCardList } from "@/components/organisms/UserCardList";
import { Layout } from "@/components/templates/Layout";
import React, { useState } from "react";

const searchUser = () => {
  const [searchValue, setSearchValue] = useState<string>("橘ひなの")
  const [videoType, setVideoType] = useState<string>("")
  return (
    <Layout setSearchValue={setSearchValue} setVideoType={setVideoType}>
      <div className="w-10/12 mx-auto">
        <UserCardList searchValue={searchValue} videoType={videoType} />
      </div>
    </Layout>
  );
};

export default searchUser;
