import React from 'react'
import './Lesson.css'
import LessonCard from "../components/LessonCard/LessonCard"
import data from "../helper/data"





function Lesson() {
    const cards = data.map(item => {
        return (
          <LessonCard 
          {...item}
          />
    
        )
        })
  return (
    <div className='main'>
       {cards}
    </div>
  )
}

export default Lesson