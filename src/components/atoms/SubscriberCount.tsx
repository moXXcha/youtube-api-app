import React from "react";

type Props = {
  size: "base" | "small";
};
export const SubscriberCount = (props: Props) => {
  return (
    <p className={`${props.size === "base" ? "text-2xl" : "text-[12px]"}`}>
      チャンネル登録者数 1000万人
    </p>
  );
};
