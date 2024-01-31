"use client";
import MenuItem from "./MenuItem";
const MenuList = ({ items, onEdit }) => {
  return (
    <>
      <div className="flex flex-wrap gap-5 mt-10">
        {items?.map((item, i) => (
          <MenuItem
            key={item.id}
            name={item.menu.itemName}
            image={item.menu.imageUrl}
            onEdit={() => onEdit(item)}
          />
        ))}
      </div>
    </>
  );
};

export default MenuList;
