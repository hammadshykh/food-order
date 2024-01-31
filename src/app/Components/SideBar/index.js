import HeaderLogo from "@/app/Common/HeaderLogo";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SheetDemo = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <HeaderLogo />
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">{children}</div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
export default SheetDemo;
