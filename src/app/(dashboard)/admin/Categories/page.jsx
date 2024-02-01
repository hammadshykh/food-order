"use client";

import CategoryList from "@/app/Components/Dashboard/Category/CategoryList";
import CategorySkeleton from "@/app/Components/Dashboard/Category/CategorySkeleton";
import {
  UpdateCategories,
  addCategory,
  deleteCategories,
  fetchCategories,
} from "@/app/Context/reducers/categoryFirestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Categoreis() {
  const dispatch = useDispatch();
  const [categoryToEdit, setCategoryToEdit] = useState(null);
  const [category, setCategory] = useState("");
  const [EditedCategory, setEditedCategory] = useState("");
  const { categories, isLoading } = useSelector((state) => state.categoryStore);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const onAddCategoryHandler = () => {
    dispatch(addCategory({ id: categories?.length + 1, name: category }));
  };

  const onDeleteCategoryHandler = (id) => {
    dispatch(deleteCategories(id));
  };

  const onEditCategoryHandler = (category) => {
    const { categories } = category;
    setCategoryToEdit(category);
    setEditedCategory(categories.name);
  };
  const onUpdateCategoryHandler = () => {
    const { id, categories } = categoryToEdit;

    dispatch(UpdateCategories({ id: id, EditedCategory }));
  };

  const cancelCategoryHandler = () => {
    setCategory("");
    setCategoryToEdit(null);
  };

  return (
    <>
      <div className="p-10">
        <h1>New Category name</h1>
        <div className="md:flex items-center py-4">
          <Input
            placeholder="Add Category"
            value={categoryToEdit === null ? category : EditedCategory}
            onChange={
              categoryToEdit === null
                ? handleChange
                : (e) => setEditedCategory(e.target.value)
            }
            className="max-w-sm me-5 mb-5"
          />
          <Button
            onClick={
              categoryToEdit === null
                ? onAddCategoryHandler
                : onUpdateCategoryHandler
            }
            variant="none"
            className="bg-orange-500 text-white me-3"
          >
            {categoryToEdit === null ? "Create" : "Update"}
          </Button>
          <Button variant="secondary" onClick={cancelCategoryHandler}>
            Cancel
          </Button>
        </div>

        {/* {categories.length === 0 && <p>no categories found</p>} */}
        <div>
          {isLoading ? (
            <CategorySkeleton/>
          ) : (
            <CategoryList
              onDelete={onDeleteCategoryHandler}
              items={categories}
              onEdit={onEditCategoryHandler}
            />
          )}
        </div>
      </div>
    </>
  );
}
