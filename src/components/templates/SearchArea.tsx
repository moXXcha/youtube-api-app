import React from "react";
import { Search } from "../atoms/Search";
import { ContentsSwitcher } from "../molecules/ContentsSwitcher";

export const SearchArea = () => {
  return (
    <div className="w-11/12 mx-auto mt-5">
      <Search />
      <div className="mt-5">
        <ContentsSwitcher />
      </div>
    </div>
  );
};
