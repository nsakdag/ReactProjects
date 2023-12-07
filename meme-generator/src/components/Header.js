import React from "react"
import HeadImg from "../images/troll-face.png"


export default function Header() {
    return (
        <header className="header">
            <img 
                src= {HeadImg}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Ns-React Projects</h4>
        </header>
    )
}