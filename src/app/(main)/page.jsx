"use client"
import { Button } from "@/components/ui/button";
import { ArrowRightCircle, ArrowRightSquare } from "lucide-react";
import SalesList from "@/app/Components/BestSales/SalesList"
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { fetchMenuCards } from "../Context/reducers/menuFirestore";
import { fetchCarts } from "../Context/reducers/cartFirestore";
import { useRouter } from "next/navigation";
import { ToastAction } from "@/components/ui/toast";
import Image from "next/image";

export default function Home() {
  const disPatch = useDispatch();
  const navigate = useRouter()
  const { toast } = useToast();
  const state = useSelector((state) => state.menuStore);

  useEffect(() => {
    disPatch(fetchMenuCards());
  }, [disPatch]);

  useEffect(() => {
    disPatch(fetchCarts());
  }, [disPatch]);

  const handlePageChange = (route)=>{
    navigate.push(route)
  }

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


  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/3 space-y-8">
          <h1 className="font-bold text-[40px] sm:text-6xl leading-1">
            EveryThing is better with a{" "}
            <span className="text-red-500">Pizza</span>
          </h1>
          <p>
            Pizza is the missing plece the makes every day complete, a simple
            yet dilicious joy in life
          </p>
          <div className="flex" >
            <Button onClick={()=> handlePageChange("/Menu")} className="rounded-3xl px-10 py-6">
              ORDER NOW{" "}
              <span className="ms-3">
                <ArrowRightSquare />
              </span>
            </Button>
            <Button onClick={()=> handlePageChange("/About")} variant="unstyled" className="rounded-3xl px-10 py-6">
              Learn more{" "}
              <span className="ms-3">
                <ArrowRightCircle />
              </span>
            </Button>
          </div>
        </div>
        <div>
          <div className="md:w-2/3 w-full">
            <Image src="/pizza.png" alt="pizza" className="w-full block" />
          </div>
        </div>
      </div>
      <div>
        <div className="absolute left-0 top-3/4 lg:block hidden">
          <Image src="/sallad1.png" alt="pizza" className="w-full block" />
        </div>
        <div className="absolute right-0 top-3/4 lg:block hidden">
          <Image src="/sallad2.png" alt="pizza" className="w-full block" />
        </div>
      </div>
      {/* Section CHECK OUT */}
      <div className="my-6">
        <div className="text-center">
          <p>CHECK OUT</p>
          <h1 className="text-red-500 font-extrabold italic text-5xl">
            Our Best Sellers
          </h1>
        </div>
        <div className="my-5">
          <SalesList items={state.menuCards}  />
        </div>
      </div>
    </div>
  );
}
