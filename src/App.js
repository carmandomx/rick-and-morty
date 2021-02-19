import "./App.css";
import SearchBox from "./components/SearchBox";
import LocationContainer from "./components/LocationContainer";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  const handleSearch = (queryValue) => {
    setQuery(queryValue);
  };
  return (
    <div className="App">
      <SearchBox onSearchLocation={handleSearch} />
      {query && <LocationContainer query={query} />}
    </div>
  );
}

export default App;
