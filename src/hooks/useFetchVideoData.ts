import { useEffect, useState } from "react";
import { useFetchData } from "./useFetchData";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const API_KEY = publicRuntimeConfig.API_KEY;


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
};

type item = {
  id?: {
    videoId: string
  }
  snippet: {
    thumbnails?: {
      medium: object
    }
    title?: string
    channelId?: string
    channelTitle?: string
    description?: string
    liveBroadcastContent: string
  }
}



export const useFetchVideoData = (url: string) => {

  const [datas, setDatas] = useState<Data[]>([]);

  const requestURL = url + "&key=" + API_KEY
  const videoData = useFetchData(requestURL);

  useEffect(() => {
    const fetchData = async () => {
      if (videoData.contents !== undefined) {
        const items:item[] = videoData.contents.items;
        const newData = items.map((item: any) => {
          const title = item.snippet.title !== undefined ? item.snippet.title : "";
          const thumbnails = item.snippet.thumbnails !== undefined ? item.snippet.thumbnails : "";
          const videoId = item.id !== undefined ? item.id.videoId : "";
          const channelTitle = item.snippet.channelTitle !== undefined ? item.snippet.channelTitle : "";
          const channelId = item.snippet.channelId !== undefined ? item.snippet.channelId : "";
          const description = item.snippet.description !== undefined ? item.snippet.description : "";

          return {
            title: title,
            thumbnails: thumbnails,
            videoId: videoId,
            channelTitle: channelTitle,
            channelId: channelId,
            description: description,
          };
        });
        setDatas(newData);
      }
    };

    fetchData();
  }, [videoData.contents]);
  return datas
};
