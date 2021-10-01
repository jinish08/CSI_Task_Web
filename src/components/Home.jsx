import React, { useState, useEffect } from "react";
import Card from "./Card";

function Home() {
  const [jokes, setJokes] = useState([]);

  const getJokes = async () => {
    const res = await fetch(
      "https://v2.jokeapi.dev/joke/Any?type=single&amount=10"
    );
    const data = await res.json();
    setJokes(data.jokes);
    console.log(jokes);
  };

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <>
      <div className="card-container">
        {jokes.map((currentJoke) => {
          return (
            <Card
              id={currentJoke.id}
              title={currentJoke.category}
              content={currentJoke.joke}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
