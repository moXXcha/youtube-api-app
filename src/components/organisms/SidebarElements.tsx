import React from "react";
import { HomeButton } from "../atoms/HomeButton";
import { OnDemandButton } from "../atoms/OnDemandButton";
import { LiveButton } from "../atoms/LiveButton";

type Props = {
  page?: "player";
};
export const SidebarElements = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center pt-5">
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
