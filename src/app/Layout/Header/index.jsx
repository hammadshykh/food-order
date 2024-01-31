"use client";

import React from "react";
import NavLinks from "../NavLinks";
import { ModeToggle } from "@/app/Components/ThemeModeChange";
import HeaderLogo from "@/app/Common/HeaderLogo";
import { BookOpenText, Contact, Home, Menu, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import SheetDemo from "../../Components/SideBar";
const LINK_DATA = [
  {icon:<Home/>, nameLink: "Home", link: "/" },
  {icon:<Menu/>, nameLink: "Menu", link: "/Menu" },
  {icon:<BookOpenText />, nameLink: "About", link: "/About" },
  {icon:<Contact /> , nameLink: "Contact", link: "/Contact" },
];
const linkClass = "hover:text-green-500";

function Header() {
  // const session = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/signn");
  //   },
  // });
  const router = useRouter();
  const { itemCarts, isLoading } = useSelector((state) => state.cartStore);
  const handleRouteChange = (path) => {
    console.log("test");
    router.push(path);
  };

  return ( 
    <div className="flex items-center flex-1 justify-between py-4 mb-12">
      <div className="block md:hidden">
        <SheetDemo>
        <div className="ms-3">
          <NavLinks
            items={LINK_DATA}
            className="flex-col space-y-3 font-normal"
          />
        </div>
        </SheetDemo>
      </div>
      <div className="md:flex justify-between items-center hidden">
        <HeaderLogo />
        <NavLinks items={LINK_DATA} className="flex-row space-x-8 ms-10" />
      </div>
      <div className="flex items-center space-x-4">
        <Button onClick={() => handleRouteChange("/signin")} variant="unstyled">
          Login
        </Button>
        <Button
          onClick={() => handleRouteChange("/SignUp")}
          variant="unstyled"
          className="sm:px-12 bg-red-500 text-white font-semibold hover:bg-red-600 rounded-3xl"
        >
          Rejister
        </Button>
        <div
          className="flex items-center"
          onClick={() => handleRouteChange("/Cart")}
        >
          <ShoppingCart className="cursor-pointer hover:text-yellow-400" />
          <span
            className={
              isLoading
                ? "animate-pulse bg-red-500 rounded-full px-2 ms-1 py-[0.10rem] text-white"
                : "bg-red-500 rounded-full px-2 ms-1 py-[0.10rem] text-white"
            }
          >
            {itemCarts.length}
          </span>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
