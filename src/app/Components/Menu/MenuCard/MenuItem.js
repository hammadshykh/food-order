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
import DialogDemo from "../MenuDialogBox";
import Image from "next/image";

const MenuItem = ({
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
    <Card className={cn("md:w-[320px]", className)} {...props}>
      <CardHeader className="flex justify-center items-center">
        <div className="w-2/3 justify-center">
          <Image src={image} className="block w-full" alt="asd" />
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
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

export default MenuItem;
