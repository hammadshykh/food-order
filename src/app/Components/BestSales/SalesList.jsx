import SalesItem from "./SalesItem"

const SalesList = ({items,onAdd})=>{
    return   <div className="flex flex-wrap gap-5 justify-center">
    {items?.map((item) => (
      <SalesItem
        key={item.menu.id}
        description={item.menu.description}
        title={item.menu.itemName}
        image={item.menu.imageUrl}
        price={item.menu.price}
        onAdd={() => onAdd(item)}
      />
    ))}
  </div>
}



export default SalesList