"use client";
import MenuItem from "./MenuItem";
const MenuList = ({ items, onAdd }) => {
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-center">
        {items?.map((item) => (
          <MenuItem
            key={item.menu.id}
            description={item.menu.description}
            title={item.menu.itemName}
            image={item.menu.imageUrl}
            price={item.menu.price}
            onAdd={() => onAdd(item)}
          />
        ))}
      </div>
    </>
  );
};

export default MenuList;
