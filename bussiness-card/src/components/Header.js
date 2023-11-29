import React from 'react'
import profileLogo from '../images/nsakdag.jpg'

export default function Header() {
    return(
        <div className="header--container">
            <img src ={profileLogo} alt=""  />
        </div>
    )
}