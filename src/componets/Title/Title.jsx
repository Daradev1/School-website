import React from 'react'
import "./Title.css"
const Title = (props) => {
  return (
    <div className='title'>
        <p>{props.subtitle}</p>
        <h2>{props.Title}</h2>
    </div>
  )
}

//subtitle, Title
export default Title