import React, { useEffect, useState } from "react";
import { UserCard } from "./UserCard";
import { useFetchVideoData } from "@/hooks/useFetchVideoData";

type Data = {
  thumbnails: {
    medium: {
      url: string
      height: number
      width: number
    }
  }
  title: string;
  videoId: string;
  channelId: string
  channelTitle: string
  description: string
}

type Props = {
  searchValue: string
  videoType: string
}
export const UserCardList = (props: Props) => {
  const [datas, setDatas] = useState<Data[]>([])

  const test = useFetchVideoData(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${props.searchValue}&fields=items(id,snippet(channelId,channelTitle,description))&maxResults=30&order=viewCount&type=video${props.videoType}`)

  useEffect(() => {
    setDatas(test)
  },[test])

  if(!datas || datas.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap justify-between gap-y-7 ">
      {datas.map((data:Data, index) => (
        <UserCard data={data} />
      ))}
    </div>
  );
};
