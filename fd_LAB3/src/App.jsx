import React, { useEffect, useState } from "react";
import DataList from "./components/DataList";
import "bootstrap/dist/css/bootstrap.min.css";

const DataDisplayApp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Dane osobowe</h1>
      <DataList data={data} />
    </div>
  );
};

export default DataDisplayApp;
