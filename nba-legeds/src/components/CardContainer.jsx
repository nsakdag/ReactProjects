import React from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { data } from "../assets/data";
import PlayerCard from "./PlayerCard";
const CardContainer = () => {
  const [search, setSearch] = React.useState("");

  const filterData = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase().trim()));
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div>
      <Form.Control
        placeholder="Search a player"
        className="w-50 m-auto"
        onChange={handleChange}
        type="search"
      />
      <Container className="rounded-4 my-4 p-3 card-container">
        <Row className="justify-content-center g-3">
          {filterData.map((player, i) => (
            <Col xl={3} lg={4} md={6} key={i}>
              <PlayerCard {...player} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CardContainer;
