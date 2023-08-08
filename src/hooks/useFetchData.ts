import axios from "axios";
import useSWR from "swr";

export const useFetchData = (url: string) => {
  const fetcher = async (url: string) => {
    const res = await axios.get(url);
    return res.data;
  };

  const { data, error } = useSWR(url, fetcher);

  return {
    contents: data,
    error: error,
  };
};
