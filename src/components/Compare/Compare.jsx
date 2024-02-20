import React from "react";
import "./Compare.css";

export default function Compare({image, title, description}) {
  return (
    <div className="compare-container">
          <img>{image}</img>
          <h3>{title}</h3>
          <p>{description}</p>
    </div>
  );
}





{/* <div className="compare-container-card">
  <img></img>
  <h3>Compare</h3>
  <p>Compare student accommodation to find the right home for you.</p>
</div>
<div className="compare-container-card">
  <img></img>
  <h3>Bills Included</h3>
  <p>Bills are included in all rent prices. No hidden fees.</p>
</div> */}