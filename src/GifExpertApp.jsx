import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Jujutsu Kaisen"]);

  const onAddCategory = (newCategory) => {
    const found = categories.find(
      (element) => element && newCategory && element.toLowerCase() === newCategory.toLowerCase()
    );
    if (!categories.includes(newCategory) && !found) {
      setCategories(() => {
        return [newCategory, ...categories];
      });
    }
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        setCategories={setCategories}
        onAddCategory={onAddCategory}
        proptest={"test"}
      />

      <button
        title="Add"
        name="addCategoryButton"
        onClick={() => onAddCategory()}
      >
        Add
      </button>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
