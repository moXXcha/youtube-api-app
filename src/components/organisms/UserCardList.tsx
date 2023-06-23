import React from "react";
import { UserCard } from "./UserCard";

export const UserCardList = () => {
  const array = [...Array(20)];
  return (
    <div className="flex flex-wrap justify-between gap-y-7 ">
      {array.map((_) => (
        <UserCard />
      ))}
    </div>
  );
};
