import React from "react";
import { Search } from "../atoms/Search";
import { ContentsSwitcher } from "../molecules/ContentsSwitcher";

type Props = {
  page?: "player" | "profile";
};
export const Header = (props: Props) => {
  return (
    <div className="w-full pt-5 z-10 bg-white fixed">
      <div className="w-10/12 mx-auto flex flex-col items-center">
        <div className="w-full">
          <div>
            <Search />
          </div>
          <div className="mt-5">
            {props.page === "player" || "profile" ? "" : <ContentsSwitcher />}
          </div>
        </div>
      </div>
    </div>
  );
};
