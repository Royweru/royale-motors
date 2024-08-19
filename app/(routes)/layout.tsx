import React from "react";

const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className=" min-h-screen w-full">{children}</div>;
};

export default RoutesLayout;
