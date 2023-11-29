import React from 'react'
import './Slider.css'
import overlay from '../../assets/overlay.png'

function Slider({headline, desc}) {
  return (
    <div className='slider-container'>
        <div className='slider-text'>
            <h1>{headline}</h1>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Slider