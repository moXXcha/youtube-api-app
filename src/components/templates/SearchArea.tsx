import React from "react";
import { Search } from "../atoms/Search";
import { ContentsSwitcher } from "../molecules/ContentsSwitcher";

export const SearchArea = () => {
  return (
    <div className="w-10/12 pt-5 fixed z-10 bg-white">
      <Search />
      <div className="mt-5">
        <ContentsSwitcher />
      </div>
    </div>
  );
};
