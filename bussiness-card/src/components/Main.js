import React from 'react'
import emailLogo from '../images/Mail.png'
import linkedinLogo from '../images/linkedin.png'

export default function Main() {
    return(
        <div className="main--container">
                    <h3 className="main--heading main--content">
                Enes Akdag
            </h3>
            <h4 className="main--h4--one main--content">
                Frontend Developer
            </h4>
            <span className="main--span-two main--content">
                Website Link Channel
            </span>
            <div className="btn--class">
            <button className="main--btn btn-email">
                <img src={emailLogo}  alt='error' className='email' />Email
            </button>
            <button className="main--btn btn-linkedin">
                <img src={linkedinLogo} alt='error' className='linkedin' />LinkedIn
            </button>

            </div>

            <div className="main--about--interest">
                <ul>
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ipsum consequatur, nostrum sit maiores necessitatibus excepturi quibusdam dolor voluptate eos aut quae culpa accusamus, facilis optio, eveniet quidem odio doloremque.</p>
                    <h3>Interests</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatibus, libero ut amet nihil laudantium ea recusandae neque expedita quae. Temporibus earum aperiam totam deleniti, quidem eius corrupti nobis non!</p>
                </ul>
            </div>
        </div>
    )
}