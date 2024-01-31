"use client";

import CategoryItem from "./CategoryItem";

const CategoryList = ({ items, onDelete, onEdit }) => {
  return items.map((v) => (
    <CategoryItem
      onEdit={() => onEdit(v)}
      onDelete={() => onDelete(v.id)}
      name={v.categories.name}
      key={v.id}
    />
  ));
};

export default CategoryList;
