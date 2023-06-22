import React from "react";
import { OnDemandButton } from "../atoms/OnDemandButton";
import { LiveButton } from "../atoms/LiveButton";

export const VideoTypeSwitcher = () => {
  return (
    <div className="w-32 flex flex-col space-y-2">
      <OnDemandButton />
      <LiveButton />
    </div>
  );
};
