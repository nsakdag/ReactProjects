import React from 'react'
import twitterLogo from '../images/twitter-icon.png'
import facebookLogo from '../images/facebook-icon.png'
import instagramLogo from '../images/instagram-icon.png'
import githubLogo from '../images/github-icon.png'


export default function Footer() {
    return(
        <div className="footer--container">
            <img src={twitterLogo} alt="" className='footer--image' />
            <img src={facebookLogo} alt="" className='footer--image' />
            <img src={instagramLogo} alt="" className='footer--image' />
            <img src={githubLogo} alt="" className='footer--image' />
        </div>
    )
}