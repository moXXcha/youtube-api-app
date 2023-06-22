import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const MainContents = ({ children }: Props) => {
  return <div className="w-11/12 mx-auto mt-32 ml-24">{children}</div>;
};
