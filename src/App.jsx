import React, { useState } from 'react'
import Navbar from './componets/navbar/Navbar'
import Hero from './componets/Hero/Hero'
import Programs from './componets/programs/Programs'
import Title from './componets/Title/Title'
import About from './componets/About/About'
import Campus from './componets/Campus/Campus'
import Testimonials from './componets/Testimonials/Testimonials'
import Contact from './componets/Contact/Contact'
import Footer from './componets/footer/Footer'
import VideoPlayer from './componets/videoPlayer/VideoPlayer'

const App = () => {
const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subtitle='Our Program' Title='What We Offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subtitle='Gallery' Title='College Photos'/>
      <Campus/>
      <Title subtitle='TESTIMONIALS' Title='What Our Student Says'/>
      <Testimonials/>
      <Title subtitle='Contact Us' Title='Get In Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
