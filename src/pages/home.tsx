import { Video } from "@/components/organisms/Video";
import { MainContents } from "@/components/templates/MainContents";
import { SearchArea } from "@/components/templates/SearchArea";
import { Sidebar } from "@/components/templates/Sidebar";
import React from "react";

const home = () => {
  const array = [...Array(20)];
  return (
    <div>
      <div>
        <div className="flex">
          <Sidebar />
          <div className="w-10/12 mx-auto">
            <SearchArea />
            <MainContents>
              <div className="flex flex-wrap gap-14">
                {array.map((_) => (
                  <Video />
                ))}
              </div>
            </MainContents>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
