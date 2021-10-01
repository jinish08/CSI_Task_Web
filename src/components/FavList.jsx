import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FavCard from "./FavCard";
import { count } from "./FavCard";

function FavList() {
  const myState = useSelector((state) => state.idReducer);
  const ids = myState.ids;

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const getJokes = async (id) => {
      const res = await fetch("https://v2.jokeapi.dev/joke/Any?idRange=" + id);
      const data = await res.json();
      setJokes((prevValue) => {
        return [...prevValue, data];
      });
      console.log(jokes);
    };

    ids.map((id) => {
      return getJokes(id);
    });

    setJokes([]);
  }, [count]);

  console.log(jokes);

  return (
    <>
      <div className="card-container">
        {jokes.map((currentJoke) => {
          return (
            <>
              <FavCard
                id={currentJoke.id}
                title={currentJoke.category}
                content={currentJoke.joke}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default FavList;
