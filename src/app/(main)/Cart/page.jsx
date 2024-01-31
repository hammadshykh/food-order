"use client";

// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartList from "../../Components/Cart/cartList";
import CartForm from "../../Components/Cart/cartForm";
import { useEffect } from "react";
import { deleteCarts, fetchCarts } from "../../Context/reducers/cartFirestore";
import { addOrder } from "@/app/Context/reducers/PayOrder";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";

const Cart = () => {
  const disPatch = useDispatch();
  const carts = useSelector((state) => state.cartStore.itemCarts);
  const totalPrice = useSelector((state) => state.cartStore.totalPrice);

  // console.log(carts);
  // console.log(totalPrice);

  const onItemDeleteHandler = (id) => {
    console.log(id);
    // disPatch(removeCartItem({ id }));
    disPatch(deleteCarts(id));
  };

  const onAddOrderHandler = (detail) => {
    console.log(detail);
    disPatch(addOrder(detail));
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
      <h1 className="text-red-500 font-bold text-5xl mb-10 text-center italic">
        Cart
      </h1>
      <div className="flex flex-wrap justify-center xl:justify-between">
        <div>
          {carts && <CartList onDelete={onItemDeleteHandler} items={carts} />}
          <p>totalPrice : {totalPrice}</p>
        </div>
        <div>
          {carts?.length > 0 && (
            <CartForm onAdd={onAddOrderHandler} onToast={toastHandler} />
          )}
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Cart;
