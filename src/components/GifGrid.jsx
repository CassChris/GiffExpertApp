import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "../components/GifGridItem";
import SvgComponent from "../assets/SvgComponent";

export const GifGrid = ({ category, range, onDeleteCategory }) => {
  const { data: images, loading } = useFetchGifs(category, range);

  return (
    <div className="card-container">
      <div className="card-grid__title"> 
        <h3>{category}</h3>
        
        <button
          onClick={() => {onDeleteCategory(category)}}
          className="btn btn-danger">
            x
        </button>

      </div>
        {/* svg loader */}
      {loading && <SvgComponent />}

      <div className="card-grid">
        {images.map((img) => (

          <GifGridItem 
            key={img.id}
            {...img}
          />
        ))}
      </div>
    </div>
  );
};
