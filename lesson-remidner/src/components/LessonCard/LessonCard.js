import React from "react";
import "./lesson.module.css";

function LessonCard(props) {
  return (
    <main>
      <section>
        <img src={props.image} alt="error" />
        <div>
        <p>
          Lesson Name : <span>{props.name}</span>
        </p>
        <p>
          Lesson Hour : <span>{props.hour}</span>
        </p>
        </div>
     
      </section>
    </main>
  );
}

export default LessonCard;
