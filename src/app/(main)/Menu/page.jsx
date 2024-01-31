"use client";

import MenuList from "../../Components/Menu/MenuCard/MenuList";
// import DUMMY_DATA from "../../Components/Menu/Menu-data/_menu-data.json";
import { useDispatch, useSelector } from "react-redux";
import { addDocument } from "../../Context/reducers/cartFirestore";
import { useEffect } from "react";
import { fetchMenuCards } from "@/app/Context/reducers/menuFirestore";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { Toaster } from "@/components/ui/toaster";
import MenuSkeleton from "@/app/Components/Dashboard/Menu/MenuCard/MenuSkeleton";

// const defaulArray = [1, 2, 3, 4, 5, 6];

const Menu = () => {
  const disPatch = useDispatch();
  const { toast } = useToast();
  const state = useSelector((state) => state.menuStore);
  console.log(state);

  useEffect(() => {
    disPatch(fetchMenuCards());
  }, [disPatch]);

  const addToCartHandler = (item) => {
    if (item) {
      disPatch(addDocument(item));
      toast({
        variant: "success",
        title: "Added ItemCart!",
        description: "successfully added your cartItem",
        action: <ToastAction altText="Try again">Thans</ToastAction>,
      });
    } else {
      toast({
        variant: "destructive",
        title: "not data found",
        description: "check your cart please ",
        action: <ToastAction altText="Try again">Try Again</ToastAction>,
      });
    }
  };

  console.log(state);

  return (
    <>
      {state.isLoading ? (
        <div className="flex items-center gap-4">
          {[1, 2, 3, 4].map((v) => (
            <MenuSkeleton key={v} />
          ))}
        </div>
      ) : (
        <MenuList onAdd={addToCartHandler} items={state.menuCards} />
      )}
      <Toaster />
    </>
  );
};

export default Menu;
