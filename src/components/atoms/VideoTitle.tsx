import React from "react";

type Props = {
  size: "large" | "base";
};

export const VideoTitle = (props: Props) => {
  return (
    <p className={props.size === "large" ? "text-3xl" : "text-base"}>
      寝落ちASMR配信【ぶいすぽっ！ / 橘ひなの】
    </p>
  );
};
