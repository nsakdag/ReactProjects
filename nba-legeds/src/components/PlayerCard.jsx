import React from "react";
import { Card } from "react-bootstrap";

const PlayerCard = (props) => {
  const [showImage, setShowImage] = React.useState(true);

  function handleChange() {
    setShowImage((prevStat => !prevStat));
  }

  return (
    <Card
      className="rounded-2 m-auto player-card"
      role="button"
      onClick={handleChange}
    >
      {showImage ? (
        <Card.Img variant="top" src={props.img} className="player-logo" />
      ) : (
        <ul className="m-auto">
          {props.statistics.map((item, i) => (
            <li className="list-unstyled h5 text-start" key={i}>
              {" "}
              🏀 {item}
            </li>
          ))}
        </ul>
      )}
      <Card.Footer>
        <Card.Title>{props.name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
