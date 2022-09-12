import React, { useState } from "react";
import AddCategory from "../AddCategory";
import { GifGrid } from "../GifGrid";
import RangeCards from "../RangeCards";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const [range, setRange] = useState(10);

  // Delete All Gifs
  const onDeleteAllGifs = () => {
    setCategories([]);
  };
  
  // Delete Category
  const onDeleteCategory = (nameCategory) => {
    setCategories(
        // filter category from categories
      categories.filter((category) => category !== nameCategory)
    );
  };

  return (
    <div>
      <div className="app-header">
        <h2>GifExpertApp</h2>
        <button 
            onClick={onDeleteAllGifs} 
            className="btn btn-danger">
          Close All
        </button>
      </div>

        {/* input add category */}
      <AddCategory setCategories={setCategories} />
    
        {/* input range gifs */}
      <RangeCards setRange={setRange} range={range} />

        {/* List Gifs */}
      {
            categories.map((category) => (
              <GifGrid
              key={category}
              category={category}
              range={range}
              onDeleteCategory={onDeleteCategory}
              />
            ))
            
      }
    </div>
  );
};

export default GifExpertApp;
