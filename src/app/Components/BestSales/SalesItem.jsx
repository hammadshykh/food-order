"use client";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DialogDemo from "../Menu/MenuDialogBox";
import Image from "next/image";

const SalesItem = ({
  className,
  image,
  title,
  description,
  price,
  onAdd,
  onAddDialog,
  ...props
}) => {
  return (
    <Card className={cn("md:w-[320px] w-full dark:bg-gray-800 light:bg-gray-300", className)} {...props}>
      <CardHeader className="flex justify-center items-center">
        <div className="w-2/3 justify-center">
          <Image width={300} height={300} src={image} className="block w-full" alt="asd" />
        </div>
      </CardHeader>
      <CardContent className="grid gap-1">
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">
          {/* <span className="flex h-2 w-2 translate-y-1 me-4 rounded-full bg-sky-500" /> */}
          {description}
        </CardDescription>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
      </CardContent>
      <CardFooter>
        <DialogDemo
          price={price}
          image={image}
          description={description}
          title={title}
          onAdd={onAdd}
        />
      </CardFooter>
    </Card>
  );
};

export default SalesItem;
