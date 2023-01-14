import React, { useState, useEffect } from "react";

import { options, fetchData } from "../utils/dataFetch";

export default function Categories() {
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", options)
      .then((response) => response.json())
      .then((response) => setBodyParts(response))
      .catch((err) => console.error(err));
    /* const fetchExerciesesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options
      );
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExerciesesData(); */
  }, []);

  return (
    <>
      <div>
        render
        <ul>
          {bodyParts.map((part) => (
            <li key={part.id || part}>{part}</li>
          ))}
        </ul>
      </div>

      <h1> {process.env.REACT_APP_CONTENT}</h1>
    </>
  );
}
