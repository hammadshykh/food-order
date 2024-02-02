import BarChart from "@/app/Components/Dashboard/Chart";
import TopCards from "@/app/Components/Dashboard/Chart/TopCards";
import RecentOrders from "@/app/Components/Dashboard/Chart/RecentOrders";

export default function DashBoard() {
  return (
    <>
      <TopCards />
      <div className="md:p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart />
        <RecentOrders />  
      </div>
    </>
  );
}
