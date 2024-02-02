import OrderDataTable from "@/components/ui/order-data-table";
import { columns } from "./columns";

const data = [
  {
    id: 1,
    payment: "paid",
    email: "hammad123@gmail.com",
    date: "20/1/2024",
    showOrder: "Show order",
  },
  {
    id: 2,
    payment: "paid",
    email: "hammad123@gmail.com",
    date: "20/1/2024",
    showOrder: "Show order",
  },
  {
    id: 3,
    payment: "Notpaid",
    email: "hammad123@gmail.com",
    date: "20/1/2024",
    showOrder: "Show order",
  },
  {
    id: 4,
    payment: "Notpaid",
    email: "hammad123@gmail.com",
    date: "20/1/2024",
    showOrder: "Show order",
  },
  {
    id: 1,
    payment: "paid",
    email: "hammad123@gmail.com",
    date: "20/1/2024",
    showOrder: "Show order",
  },
  {
    id: 2,
    payment: "Notpaid",
    email: "hammad123@gmail.com",
    date: "20/1/2024",
    showOrder: "Show order",
  },
  {
    id: 3,
    payment: "paid",
    email: "hammad123@gmail.com",
    date: "20/1/2024",
    showOrder: "Show order",
  },
  {
    id: 4,
    payment: "Notpaid",
    email: "hammad123@gmail.com",
    date: "20/1/2024",
    showOrder: "Show order",
  },
];
const Users = () => {
  return (
    <div className="md:p-5">
      <h1 className="text-2xl font-semibold">Order Access</h1>
      <OrderDataTable columns={columns} data={data} />
    </div>
  );
};

export default Users;
