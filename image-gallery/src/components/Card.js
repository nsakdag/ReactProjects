import React from "react";

export default function Card(props) {
  return (
    <div className="pictures">
      <div className="picture">
        <div className="imageContainer">
          <img src={props.src.large} alt="error" />
        </div>
        <div className="info">
          <p>{props.photographer}</p>
        </div>
      </div>
    </div>
  );
}
