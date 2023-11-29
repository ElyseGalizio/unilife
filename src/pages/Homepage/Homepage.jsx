import React from 'react'
import './Homepage.css'
import Slider from '../../components/Slider/Slider'


function Homepage() {
  return (
    <div className='homepage-container'>
      <Slider headline="Find student homes with bills included" desc="A simple and faster way to search for student accommodation" />
    </div>
  )
}

export default Homepage