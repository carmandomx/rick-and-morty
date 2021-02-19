import React from "react";

const ResidentInfo = ({ data }) => {
  const { name, image, status, origin, episode } = data;
  return (
    <div style={{ flex: "33%" }}>
      <img style={{ width: 50, height: 50 }} src={image} alt={name} />
      <ul>
        <li>Name: {name}</li>
        <li>Status: {status}</li>
        <li>Origin: {origin.name}</li>
        <li>Aparitions: {episode.length}</li>
      </ul>
    </div>
  );
};

export default ResidentInfo;
