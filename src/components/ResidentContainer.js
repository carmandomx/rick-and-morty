import React, { useEffect, useState } from "react";
import { getResident } from "../service/api";
import ResidentInfo from "./ResidentInfo";

const ResidentContainer = ({ url }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    const promise = getResident(url);

    promise.then((response) => {
      setResident(response.data);
    });
  }, [url]);

  return (
    <div style={{ flex: "33%" }}>
      {resident && <ResidentInfo data={resident} />}
    </div>
  );
};

export default ResidentContainer;
