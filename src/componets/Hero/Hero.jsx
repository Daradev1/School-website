import React from 'react'
import "./Hero.css"
import darkArrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Welcome to Almond Compassionate Academy
            Where Compassion Meets Excellence in Education</h1>
            <p>At Almond Compassionate Academy, we believe in nurturing young minds with compassion and 
              commitment to their holistic development. Our curriculum is designed to foster academic excellence, creativity,
               and character, ensuring each student grows into a confident, thoughtful, and responsible individual.</p>
        <button className="btn">Explore More <img src={darkArrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero