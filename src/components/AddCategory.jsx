import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories} ) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // minimum one letter
    if (inputValue.trim().length > 0) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control"
        onChange={handleInputChange}
        placeholder="Search"
        type="text"
        value={inputValue}
      />
    </form>
  );
};

export default AddCategory;

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
