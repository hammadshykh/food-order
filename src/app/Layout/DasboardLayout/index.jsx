// components/Layout.js
import React from "react";
import SheetDemo from "@/app/Components/SideBar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import AdminSidebar from "../../Components/Dashboard/sidebar";
import { ModeToggle } from "@/app/Components/ThemeModeChange";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import HeaderLogo from "@/app/Common/HeaderLogo";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div>
        {/* Common layout elements (header, footer, etc.) */}
        <header>
          <div className="py-3 px-6 flex justify-between items-center border-b ">
            <div className="block md:hidden">
              <SheetDemo>
                <AdminSidebar />
              </SheetDemo>
            </div>
            <HeaderLogo />
            {/* <h1 className="font-bold text-[30px] ">Admin</h1> */}
            <div className="flex items-center space-x-5">
              <p>Profile</p>
              <Avatar className="w-[42px]">
                <AvatarImage src="/me.jpg" alt="@shadcn" />
              </Avatar>
              <ModeToggle />
            </div>
          </div>
        </header>
        <ResizablePanelGroup
          direction="horizontal"
          className="md:min-h-[100vh] max-w-full rounded-lg border-r"
        >
          <ResizablePanel className="hidden md:flex" defaultSize={20}>
            <div className="flex h-full p-2">
              <AdminSidebar />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={80}>
            <div className="p-6 dark:bg-[#111825] min-h-[100vh]">
              <div className="dark:bg-[#030712] dark:rounded-md">
                {children}
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default DashboardLayout;
