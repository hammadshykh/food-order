import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DollarSign } from "lucide-react";
import Image from "next/image";

export default function DialogDemo({
  price,
  title,
  description,
  image,
  onAdd,
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">
          Add to cart
          <DollarSign className="mx-1 h-4 w-4" />
          {price}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4 py-4">
          <div className="w-[200px]">
            <Image
              src={image}
              className="block w-full"
              alt="asd"
              width={200}
              height={200}
            />
          </div>
          <div>
            <h2 className="font-bold my-4">{title}</h2>
            <p>{description}</p>
            <Button onClick={onAdd} className="w-full">
              Add to cart
              {/* <DollarSign className="mx-1 h-4 w-4" /> */}
              Rs
              {price}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
