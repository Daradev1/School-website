import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        
  <div className="about-left">
  <img src={about_img} alt="" className='about-img'/>
  <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
  </div>

  <div className="about-right">
    <h3>ABOUT ALMOND COMPASSIONATE ACADEMY</h3>
    <h2>Empowering Minds, Inspiring Compassion</h2>

    <p>At Almond Compassionate Academy, we are dedicated to providing an enriching and supportive learning environment that prioritizes the holistic development of our students. Founded on the principles of compassion, integrity, and academic excellence, our institution 
      strives to cultivate not only knowledge but also character, empathy, and a deep sense of community.</p>
    
    <p>
    Our diverse and inclusive approach to education ensures that each student is empowered to explore their full potential, both inside and outside the classroom. With a faculty of experienced educators, state-of-the-art facilities, and a curriculum designed to inspire curiosity, creativity,
     and critical thinking, we prepare our students to excel in a rapidly evolving world
    </p>
    <p>At Almond Compassionate Academy, we are not just focused on academic success but also on fostering values of kindness, responsibility, and global citizenship. Our mission is to develop compassionate leaders who are equipped
       with the skills and moral grounding to make a positive impact on society.</p>

    <p>Join us on a journey of growth, learning, and transformation—because at Almond 
      Compassionate Academy, we believe in shaping not just minds, but also hearts.</p>
  </div>

    </div>
  )
}

export default About