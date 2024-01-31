import DataTable from "@/components/ui/data-table";
import AddUserForm from "@/app/Components/Dashboard/User/UserForm";
import MyDialog from "@/app/Common/DialogBox";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

const btn = (
  <Button className="flex" variant="secondary">
    <UserPlus className="me-2" /> Add User
  </Button>
);

const data = [
  {
    id: 1,
    name: "Hammadshaikh",
    email: "hammad123@gmail.com",
    password: "20/1/2024",
    role: "admin",
  },
  {
    id: 2,
    name: "Ibadshaikh",
    email: "ahmed123@gmail.com",
    password: "20/1/2024",
    role: "admin",
  },
  {
    id: 3,
    name: "Rehanshaikh",
    email: "rehan123@gmail.com",
    password: "20/1/2024",
    role: "manager",
  },
  {
    id: 4,
    name: "Ahmedshaikh",
    email: "hammad123@gmail.com",
    password: "20/1/2024",
    role: "admin",
  },
];

const Users = () => {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">User Access</h1>
        <div className="mb-[-7rem]">
          <MyDialog btn={btn}>
            <AddUserForm />
          </MyDialog>
        </div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Users;
