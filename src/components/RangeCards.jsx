import React from "react";

const RangeCards = ({ setRange, range }) => {
  return (
    <div className="text-center">
      <input
        type="range"
        className="form-range w-75"
        min="1"
        max="50"
        defaultValue={10}
        onChange={(event) => setRange(event.target.value)}
        event={range}
      />
      <span className="bg-dark text-white rounded p-2">{range}</span>
    </div>
  );
};

export default RangeCards;
