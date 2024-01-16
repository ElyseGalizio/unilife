import React from 'react'
import "./CityCard.css"



function CityCard({city}) {
  
  const sliderStyle = {
    backgroundImage: `url(${city?.image_url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "300px",
    width: "400px",
    position: "relative",
  
    // zIndex: 0,
  };

  return (
    <div className="citycard-container" style={sliderStyle}>
      <div className='card-overlay'></div>
      <div className='city-info'>
        <h2>{city?.name}</h2>
        <p>{city?.property_count} properties</p>
      </div>
    </div>
  );
}

export default CityCard