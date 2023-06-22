import { Icon } from "@/components/atoms/Icon";
import { SubscriberCount } from "@/components/atoms/SubscriberCount";
import { UserId } from "@/components/atoms/UserId";
import { UserName } from "@/components/atoms/UserName";
import { Video } from "@/components/organisms/Video";
import { MainContents } from "@/components/templates/MainContents";
import { SearchArea } from "@/components/templates/SearchArea";
import { Sidebar } from "@/components/templates/Sidebar";
import React from "react";

const userDetail = () => {
  const array = [...Array(20)];
  return (
    <div>
      <div>
        <div className="flex">
          <Sidebar />
          <div className="w-10/12 mx-auto">
            <SearchArea />
            <MainContents>
              <div className="flex">
                <Icon situation="profile" />
                <div className="ml-5">
                  <UserName size="large" />
                  <UserId size="base" />
                  <SubscriberCount size="base" />
                </div>
              </div>
              <div className="flex flex-wrap gap-14 mt-16">
                {array.map((_) => (
                  <Video />
                ))}
              </div>
            </MainContents>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userDetail;
