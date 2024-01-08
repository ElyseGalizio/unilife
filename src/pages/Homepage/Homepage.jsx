import React from "react";
import "./Homepage.css";
import Slider from "../../components/Slider/Slider";
import SearchCity from "../../components/SearchCity/SearchCity";
import TopCities from "../../components/TopCities/TopCities";
import axios from "axios";
import compare from "../../assets/compare.png";
import receipt from "../../assets/receipt.png";
import search from "../../assets/search.png";


function Homepage() {
  // https://unilife-server.herokuapp.com/cities
  // this page needs to show Top Cities when the page loads
  // need useEffect

  //create State to store city data

  const [cities, setCities] = React.useState([]);

  React.useEffect(
    () => {
      console.log("homepage loaded");
      //make API call to get data
      axios
        .get(`https://unilife-server.herokuapp.com/cities`)
        .then((res) => {
          console.log(res.data.response);
          //I have the data, where do I put it?
          //store in State
          setCities(res.data.response);
        })
        .catch((err) => console.log(err));
    },
    [] //runs one time when page loads
  );

  return (
    <div className="homepage-container">
      <Slider
        headline="Find student homes with bills included"
        desc="A simple and faster way to search for student accommodation"
      />
      {/* <SearchCity /> */}
      <h2>Student accommodations in our top cities</h2>

      <TopCities cities={cities} />
      <button>See All Cities</button>
      {/* connect SeeAllCities page with React Router */}

      <div className="compare-container">
        {/* finish styling this section */}
        <h2>Compare all inclusive student homes.</h2>
        {/* the following div holds the search, compare, and bills div */}
        <div className="compare-container-div">
          <div className="compare-container-card">
            <img src={search}></img>
            <h3>Search</h3>
            <p>
              Find your dream home in the perfect area near your university.
            </p>
          </div>
          <div className="compare-container-card">
            <img src={compare}></img>
            <h3>Compare</h3>
            <p>Compare student accommodation to find the right home for you.</p>
          </div>
          <div className="compare-container-card">
            <img src={receipt}></img>
            <h3>Bills Included</h3>
            <p>Bills are included in all rent prices. No hidden fees.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
