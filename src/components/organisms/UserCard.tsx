import { Iceberg } from "next/font/google";
import React from "react";
import { Icon } from "../atoms/Icon";
import { UserName } from "../atoms/UserName";
import { UserId } from "../atoms/UserId";
import { SubscriberCount } from "../atoms/SubscriberCount";
import { ChannelSummary } from "../atoms/ChannelSummary";

export const UserCard = () => {
  return (
    <div className="w-52 h-72 border border-black border-opacity-50 rounded-md flex flex-col items-center">
      <div className="w-5/6 my-4 space-y-7">
        <Icon situation="userCard" />
        <div>
          <UserName size="small" />
          <UserId size="small" />
          <SubscriberCount size="small" />
        </div>
        <ChannelSummary />
      </div>
    </div>
  );
};
