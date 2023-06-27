import React from "react";
import { Icon } from "../atoms/Icon";
import { UserName } from "../atoms/UserName";
import { UserId } from "../atoms/UserId";
import { SubscriberCount } from "../atoms/SubscriberCount";

export const ProfileTop = () => {
  return (
    <div className="flex items-center w-full">
      <Icon situation="profile" />
      <div className="ml-5">
        <UserName size="large" />
        <UserId size="base" />
        <SubscriberCount size="base" />
      </div>
    </div>
  );
};
