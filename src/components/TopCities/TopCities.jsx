import React from 'react'
import "./TopCities.css"
import CityCard from '../CityCard/CityCard';

//TopCities should show a card for each city
//cities will be passed as a prop

function TopCities({cities}) {
  return (
    <div className='topcities-container'>
      {cities?.map((item) => (
        <CityCard 
          key={item._id} 
          city={item}
          />
      ))}
      {/* {cities?.map((item) => (
        <p key={item._id}>{item.name}</p>
      ))} */}
    </div>
  );
}
 
export default TopCities