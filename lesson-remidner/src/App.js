import React from 'react'
import "./App.css"
import Header from "./components/Headerfolder/Header"
import Lesson from "./pages/Lesson"



export default function App() {


  return (
    <div className="container">
      <Header />
          <h1 className='title'>Lesson Reminder</h1>
      <Lesson />

    </div>
   
  )
}

 