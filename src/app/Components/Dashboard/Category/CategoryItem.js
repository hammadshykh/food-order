import { Button } from "@/components/ui/button";
import { FilePenLine, Trash } from "lucide-react";

const CategoryItem = ({ name, onDelete, onEdit }) => {
  return (
    <>
      <div className="flex items-center justify-between bg-gray-600 text-white  my-5 p-3 rounded-sm">
        <h4>{name}</h4>
        <div className="flex">
          <Button onClick={onEdit} variant="none">
            <FilePenLine className="w-[1.3rem] h-[1.3rem] hover:text-gray-400" />
          </Button>
          <Button onClick={onDelete} variant="none">
            <Trash className="w-[1.3rem] h-[1.3rem] hover:text-gray-400" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
