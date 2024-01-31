import React from "react";
import MainLayout from "../Layout/MainLayout";

const layout = ({ children }) => {
  return (
    <div>
      <MainLayout>{children}</MainLayout>
    </div>
  );
};

export default layout;
