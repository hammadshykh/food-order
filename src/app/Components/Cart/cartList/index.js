import CartItem from "../cartItem";

const CartList = ({ items, onDelete }) => {
  return (
    <>
      <div className="flex flex-wrap flex-col gap-y-5">
        {items?.map((item, i) => (
          <CartItem
            key={item.carts.id}
            image={item.carts.menu.imageUrl}
            price={item.carts.menu.price}
            title={item.carts.menu.itemName}
            onDelete={() => onDelete(item.id)}
          />
        ))}
      </div>
    </>
  );
};

export default CartList;
