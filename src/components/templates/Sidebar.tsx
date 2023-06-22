import React from "react";
import { SidebarElements } from "../organisms/SidebarElements";

type Props = {
  page?: "player";
};

export const Sidebar = (props: Props) => {
  return (
    <div className="w-20 h-[100vh] bg-sidebar fixed">
      <SidebarElements page={props.page} />
    </div>
  );
};
