import React from "react";

const Pagination = ({ total, onPageChange }) => {
  let map = [];
  for (let i = 0; i < total; i++) {
    map = [...map, i + 1];
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {map.map((value) => (
        <span key={value} onClick={() => onPageChange(value)}>
          {value}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
