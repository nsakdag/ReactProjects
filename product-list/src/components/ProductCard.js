import React from "react";

export default function ProductCard(props) {
  return (
    <div className="card">
      <h1>{props.price} $</h1>
      <img src={props.image} className="card--image" />
      <div className="card-over">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}
