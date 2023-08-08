import { Iceberg } from "next/font/google";
import React from "react";
import { Icon } from "../atoms/Icon";
import { UserName } from "../atoms/UserName";
import { UserId } from "../atoms/UserId";
import { SubscriberCount } from "../atoms/SubscriberCount";
import { ChannelSummary } from "../atoms/ChannelSummary";
import Link from "next/link";

type Data = {
  thumbnails: {
    medium: {
      url: string;
      height: number;
      width: number;
    };
  };
  title: string;
  videoId: string;
  channelId: string;
  channelTitle: string;
  description: string;
};
type Props = {
  data: Data;
};
export const UserCard = (props: Props) => {
  const url = "/profile/1" + props.data.channelId;
  return (
    <Link
      href={url}
      className="w-52 h-72 border border-black border-opacity-50 rounded-md flex flex-col items-center cursor-pointer"
    >
      <div className="w-5/6 my-4 space-y-7">
        {/* <Icon situation="userCard" /> */}
        <div>
          <UserName size="small" userName={props.data.channelTitle} />
          {/* <UserId size="small" />
          <SubscriberCount size="small" /> */}
        </div>
        <ChannelSummary description={props.data.description} />
      </div>
    </Link>
  );
};
