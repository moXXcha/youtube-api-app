import React, { useState } from "react";
import Image from "next/image";
import search from "@/public/search.svg";

type Props = {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}
export const Search = (props: Props) => {
  const [searchValue, setSearchValue] = useState<string>("")
  return (
    <div className="w-full h-8 border rounded-md flex items-center">
      <div className="flex ml-3 w-full">
        <Image src={search} width={12} height={12} alt="search" />
        <input type="text" className="h-[90%] w-full focus:outline-none ml-3" value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
        <button className="w-10 h-full" onClick={() => props.setSearchValue(searchValue)}>検索</button>
      </div>
    </div>
  );
};
