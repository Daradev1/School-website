import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '..//..//assets/next-icon.png'
import back_icon from '..//..//assets/back-icon.png'
import user_1 from '..//..//assets/user-1.png'
import user_2 from '..//..//assets/user-2.png'
import user_3 from '..//..//assets/user-3.png'
import user_4 from '..//..//assets/user-4.png'


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
   if( tx > -50){
     tx -= 25;
   }
   slider.current.style.transform = `translateX(${tx}%)`;
}

const slideBackward = ()=>{
    if( tx < 0){
        tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
}


  return (
    <div className='testimonials'>
    <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
    <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
    <div className="slider">
        <ul  ref={slider}>
            <li>
        <div className="slide">
        <div className="user-info">
            <img src={user_1} alt="" />
            <div>
                <h3>–Sarah A.</h3>
                <span>A Place Where Everyone Belongs</span>
            </div>
        </div>
        <p>“The sense of community here is amazing! I’ve made lifelong friends and have always 
            felt supported by my peers and teachers. Almond has helped me discover my passion for learning.”</p>
        </div>
            </li>
            <li>
        <div className="slide">
        <div className="user-info">
            <img src={user_2} alt="" />
            <div>
                <h3>-Daramola Praise</h3>
                <span>A Truly Supportive Environment</span>
            </div>
        </div>
        <p>“Almond Compassionate Academy has given me the confidence to excel academically and grow as a person. 
            The teachers genuinely care about our success, both inside and outside the classroom.”</p>
        </div>
            </li>

            <li>
        <div className="slide">
        <div className="user-info">
            <img src={user_3} alt="" />
            <div>
                <h3>-Jessica L.</h3>
                <span>Preparing Me for the Future</span>
            </div>
        </div>
        <p>“This school has not only challenged me academically but also taught me the importance of compassion 
            and leadership. I feel ready to take on college and beyond, thanks to Almond Compassionate Academy.”</p>
        </div>
            </li>

            <li>
        <div className="slide">
        <div className="user-info">
            <img src={user_4} alt="" />
            <div>
                <h3>-Alex T.</h3>
                <span>An Inspiring Learning Experience.</span>
            </div>
        </div>
        <p>“The creative and innovative teaching methods at Almond have made learning fun and exciting. 
            I’ve discovered so much about myself and the world through the programs here.”
        </p>
        </div>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Testimonials