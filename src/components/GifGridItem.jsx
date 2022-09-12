import React from "react";

const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__bounce animate__delay-0s">
      <p>{title}</p>
      <img 
        id={id}
        src={url}
        alt={title} />
    </div>
  );
};

export default GifGridItem;
