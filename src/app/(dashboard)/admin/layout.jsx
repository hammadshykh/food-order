import DashBoardLayout from "@/app/Layout/DasboardLayout";

const Layout = ({ children }) => {
  return (
    <div>
      <DashBoardLayout>{children}</DashBoardLayout>
    </div>
  );
};

export default Layout;
