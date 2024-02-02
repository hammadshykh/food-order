import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
const MenuItem = ({ image, name, onEdit }) => {
  return (
    <div className="md:w-[240px] w-full">
      <Card
        onClick={onEdit}
        className="flex bg-gray-300 dark:bg-slate-800 flex-col justify-center cursor-pointer items-center text-gray-700 hover:bg-gray-100  dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <CardHeader>
          <div className="w-[150px] h-[150px]">
            <AspectRatio ratio={16 / 9}>
              <Image
                width={200}
                height={200}
                src={image}
                alt="Image"
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </CardHeader>
        <CardContent>
          <p>{name}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default MenuItem;
