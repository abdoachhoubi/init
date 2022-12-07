import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="result__card">
      <h1 className="card__heading">{title}</h1>
      <p className="card__content">{content}</p>
    </div>
  );
};

export default Card;
