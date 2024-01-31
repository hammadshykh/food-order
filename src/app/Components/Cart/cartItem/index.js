import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DollarSign, Trash2 } from "lucide-react";

const CartItem = ({ image, title, price, onDelete }) => {
  return (
    <>
      <div className="lg:w-[450px] pb-5 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage src={image} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h4 className="ms-3 font-bold">{title}</h4>
          </div>
          <div className="flex items-center">
            <div className="flex items-center me-8">
              <DollarSign width="18px" />
              <span>{price}</span>
            </div>
            <div
              className="hover:text-yellow-400 cursor-pointer"
              onClick={onDelete}
            >
              <Trash2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
