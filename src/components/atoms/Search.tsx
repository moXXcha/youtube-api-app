import React from "react";
import Image from "next/image";
import search from "@/public/search.svg";

export const Search = () => {
  return (
    <div className="w-full h-6 border rounded-md">
      <div className="flex ml-3 items-center">
        <Image src={search} width={12} height={12} alt="search" />
        <input type="text" className="h-[90%] w-full focus:outline-none ml-3" />
      </div>
    </div>
  );
};
