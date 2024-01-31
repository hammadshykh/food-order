"use client";
import ItemAddForm from "../../../Components/Dashboard/Menu/ItemAddForm";
import MyDialog from "../../../Common/DialogBox";
import { MessageCirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import MenuList from "@/app/Components/Dashboard/Menu/MenuCard/MenuList";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "@/components/ui/toaster";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import MenuSkeleton from "@/app/Components/Dashboard/Menu/MenuCard/MenuSkeleton";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  addMenuCard,
  fetchMenuCards,
} from "@/app/Context/reducers/menuFirestore";
import { useEffect, useState } from "react";

const btn = (
  <Button className="flex" variant="secondary">
    <MessageCirclePlus className="me-2" /> AddItem
  </Button>
);

const AddMenu = () => {
  const navigate = useRouter();
  const dispatch = useDispatch();
  const { toast } = useToast();
  const state = useSelector((state) => state.menuStore);

  useEffect(() => {
    dispatch(fetchMenuCards());
  }, [dispatch]);

  const EditMenuHandler = (item) => {
    // console.log(item);
    navigate.push("/admin/AddMenu/" + item.id);
  };

  const onAddMenuHandler = (values) => {
    console.log(values);
    dispatch(addMenuCard(values));
  };

  const toastHandler = ({ variant, title, description, action }) => {
    toast({
      variant: variant,
      title: title,
      description: description,
      action: <ToastAction altText="Try again">{action}</ToastAction>,
    });
  };

  return (
    <>
      {state.isLoading ? (
        <div className="flex items-center gap-4">
          {[1, 2, 3, 4].map((v) => (
            <MenuSkeleton key={v} />
          ))}
        </div>
      ) : (
        <div className="p-8">
          <div className="flex justify-between items-center">
            <h1>Add Menu</h1>
            <MyDialog btn={btn}>
              <ScrollArea className="md:h-[480px] py-10 rounded-md px-2">
                <ItemAddForm onToast={toastHandler} onAdd={onAddMenuHandler} />
              </ScrollArea>
            </MyDialog>
          </div>
          <MenuList onEdit={EditMenuHandler} items={state.menuCards} />
          <Toaster />
        </div>
      )}
    </>
  );
};

export default AddMenu;
