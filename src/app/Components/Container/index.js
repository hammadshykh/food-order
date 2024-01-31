"use client";
import React from "react";
import { usePathname } from "next/navigation";

const MyContainer = ({ children }) => {
  const pathname = usePathname();
  const link = pathname === "/admin";
  return <div className={link ? "" : "w-5/6 mx-auto"}>{children}</div>;
};

export default MyContainer;
