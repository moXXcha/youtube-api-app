import React from "react";
import { HomeButton } from "../atoms/HomeButton";
import { VideoTypeSwitcher } from "../molecules/VideoTypeSwitcher";

type Props = {
  page?: "player" | "profile";
  setVideoType: React.Dispatch<React.SetStateAction<string>>
};
export const Sidebar = (props: Props) => {
  return (
    <div className="w-20 h-[100vh] bg-sidebar fixed z-20">
      <div className="w-full h-full flex flex-col items-center pt-5">
        <HomeButton />
        {props.page === "player" ? (
          ""
        ) : (
          <div className="mt-6">
            <VideoTypeSwitcher setVideoType={props.setVideoType} />
          </div>
        )}
      </div>
    </div>
  );
};
