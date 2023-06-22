import { UserCard } from "@/components/organisms/UserCard";
import { MainContents } from "@/components/templates/MainContents";
import { SearchArea } from "@/components/templates/SearchArea";
import { Sidebar } from "@/components/templates/Sidebar";
import React from "react";

const searchUser = () => {
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
                  <UserCard />
                ))}
              </div>
            </MainContents>
          </div>
        </div>
      </div>
    </div>
  );
};

export default searchUser;
