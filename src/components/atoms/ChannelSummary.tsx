import React from "react";

type Props = {
  description: string;
};
export const ChannelSummary = (props: Props) => {
  return <p className="text-[12px] w-full break-words">{props.description}</p>;
};
