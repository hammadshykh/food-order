import NavLinks from "@/app/Layout/NavLinks";
import {
  User2,
  ListOrdered,
  ShoppingBasket,
  Inbox,
  LogOut,
  LayoutDashboard,
  LayoutList,
} from "lucide-react";

const LINK_DATA = [
  {
    icon: <LayoutDashboard />,
    nameLink: "DashBoard",
    link: "/admin/",
  },
  { icon: <User2 />, nameLink: "Users", link: "/admin/Users" },
  { icon: <ListOrdered />, nameLink: "Orders", link: "/admin/Orders" },
  { icon: <LayoutList />, nameLink: "Categories", link: "/admin/Categories" },
  {
    icon: <ShoppingBasket />,
    nameLink: "Menu Items",
    link: "/admin/AddMenu",
  },
  { icon: <Inbox />, nameLink: "Inbox", link: "/admin/Inbox" },
  { icon: <LogOut />, nameLink: "Sign Out", link: "/signin" },
];

const AdminSidebar = () => {
  return (
    <>
      <div>
        <div className="ms-3">
          <NavLinks
            items={LINK_DATA}
            className="flex-col space-y-3 font-normal"
          />
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
