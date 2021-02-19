import React from "react";

const LocationInfo = ({ data }) => {
  const { name, type, dimension, residents, created, id } = data;
  return (
    <ul>
      <li>Name: {name}</li>
      <li>Type: {type}</li>
      <li>Residents: {residents.length}</li>
      <li>Dimension: {dimension}</li>
      <li>Created: {created}</li>
      <li>id: {id}</li>
    </ul>
  );
};

export default LocationInfo;
