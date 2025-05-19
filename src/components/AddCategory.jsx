import PropTypes from "prop-types";
import { useState } from "react";

export const AddCategory = ({ setCategories, onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const inpValProcessed = inputValue.trim();
    if (inpValProcessed.length > 1) {
      onAddCategory(inpValProcessed);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={onSubmit} aria-label="form-category">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};
