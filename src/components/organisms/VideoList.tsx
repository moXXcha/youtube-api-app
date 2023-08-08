import React, { useEffect, useState } from "react";
import { Video } from "./Video";
import { useFetchVideoData } from "@/hooks/useFetchVideoData";

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
  searchValue: string;
  videoType: string;
};

export const VideoList = (props: Props) => {
  const [datas, setDatas] = useState<Data[]>([]);
  const fetchData = useFetchVideoData(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${props.searchValue}&fields=items(id,snippet(thumbnails,title,channelTitle))&maxResults=30&order=viewCount&type=video${props.videoType}`
  );
  useEffect(() => {
    setDatas(fetchData);
  }, [fetchData]);

  if (!datas || datas.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap gap-14">
      {datas.map((data: Data, index) => (
        <Video key={index} data={data} />
      ))}
    </div>
  );
};
