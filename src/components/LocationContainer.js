import React from "react";
import { useEffect, useState } from "react";
import { getLocation } from "./../service/api";
import LocationInfo from "./LocationInfo";
import Pagination from "./Pagination";
import ResidentContainer from "./ResidentContainer";
const LocationContainer = ({ query }) => {
  const [location, setLocation] = useState(null);
  const [residents, setResidents] = useState([]);
  const [residentsOnPage, setResidentsOnPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (query) {
      const promise = getLocation(query);

      promise.then((response) => {
        setLocation(response.data);
        setResidents(response.data.residents);
      });
    }
  }, [query]);

  useEffect(() => {
    if (currentPage === 1) {
      setResidentsOnPage(residents.slice(0, 5));
      return;
    }
    const offset = currentPage * 5;
    setResidentsOnPage(residents.slice(offset - 5, offset));
  }, [currentPage, residents]);

  const handlePageChanged = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {location && <LocationInfo data={location} />}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {residentsOnPage.map((value) => (
          <ResidentContainer
            key={value.split("https://rickandmortyapi.com/api/character/")[1]}
            url={value}
          />
        ))}
      </div>
      <Pagination
        total={Math.ceil(residents.length / 5)}
        onPageChange={handlePageChanged}
      />
    </>
  );
};

export default LocationContainer;
