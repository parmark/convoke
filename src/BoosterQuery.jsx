import React, { useState, useEffect } from "react";
import Cards from "./Cards.jsx";

function BoosterQuery() {
  const [set, changeSet] = useState("jtn");
  const [sets, changeSets] = useState([
    {
      name: "Aether Revolt",
      code: "aer",
    },
    {
      name: "Theros Beyond Death",
      code: "thb",
    },
  ]);
  const [isLoading, changeIsLoading] = useState(false);
  const [booster, changeBooster] = useState([]);

  useEffect(() => {
    /* fetch("https://api.scryfall.com/sets")
      .then((response) => response.json())
      .then((list) => list.data)
      .then((data) => {
        changeSets(
          data.map(({ name, code }) => ({
            name,
            code,
          }))
        );
      });
    changeIsLoading(false); */
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.magicthegathering.io/v1/sets/${set}/booster`)
      .then((response) => response.json())
      .then((data) => {
        changeBooster(
          data.cards.map(({ imageUrl }) => ({
            imageUrl,
          }))
        );
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          onChange={(e) => changeSet(e.target.value)}
          onBlur={(e) => changeSet(e.target.value)}
        >
          {isLoading ? (
            <option>Loading ...</option>
          ) : (
            sets.map((set) => (
              <option value={set.code} key={set.code}>
                {set.name}
              </option>
            ))
          )}
        </select>
        <input type="submit" value="Crack" />
      </form>
      <Cards cards={booster} />
    </div>
  );
}

export default BoosterQuery;
