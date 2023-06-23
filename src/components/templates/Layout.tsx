import React, { ReactComponentElement, ReactNode } from "react";
import { Sidebar } from "../organisms/Sidebar";
import { Header } from "../organisms/Header";

type Props = {
  page?: "player" | "profile";
  children: ReactNode;
};
export const Layout = (props: Props) => {
  const style = props.page === "player" || props.page === "profile" ? "mt-20" : "mt-32";
  return (
    <div className="flex">
      <Sidebar page={props.page} />
      <div className="flex w-full flex-col ml-20 items-center mx-auto">
        <Header page={props.page} />
        <div className={`${style} w-full`}>{props.children}</div>
      </div>
    </div>
  );
};
