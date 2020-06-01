import React from "react";

function Cards({ cards }) {
  return (
    <div id="cards">
      {cards.map((card) => (
        <img key={card.name} src={card.imageUrl} alt="magic card" />
      ))}
    </div>
  );
}

export default Cards;
