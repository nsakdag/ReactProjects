import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import "./App.css";
import data from "./helper/data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="section">
      <Header />
      <main>{cards}</main>
    </div>
  );
}

export default App;
