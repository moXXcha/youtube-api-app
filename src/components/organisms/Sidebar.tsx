import React from "react";
import { HomeButton } from "../atoms/HomeButton";
import { OnDemandButton } from "../atoms/OnDemandButton";
import { LiveButton } from "../atoms/LiveButton";

type Props = {
  page?: "player";
};
export const Sidebar = (props: Props) => {
  return (
    <div className="w-20 h-full bg-sidebar pt-5 flex flex-col items-center">
      <HomeButton />
      {props.page === "player" ? (
        ""
      ) : (
        <div className="flex flex-col mt-6 space-y-2">
          <OnDemandButton />
          <LiveButton />
        </div>
      )}
    </div>
  );
};
