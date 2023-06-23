import { UserCardList } from "@/components/organisms/UserCardList";
import { Layout } from "@/components/templates/Layout";
import React from "react";

const searchUser = () => {
  const array = [...Array(20)];
  return (
    <Layout>
      <div className="w-10/12 mx-auto">
        <UserCardList />
      </div>
    </Layout>
  );
};

export default searchUser;
