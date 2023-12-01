import React from "react";
import data from "./components/data";
import Card from "./components/Card"
import "./App.css";

function App() {
  const cards = data.map(item => {
      return (
          <Card
            
              {...item}
              
          />
      )
  })        
  
  return (
      <div className="container">
        <h1>Image Gallery</h1>
         <div className="pictures">
          {cards}
         </div>
      </div>
  )
}

export default App;
