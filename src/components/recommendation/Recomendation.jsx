import React, { useState } from "react";
import "./Recomendation.css";
import { destinations } from "../../data/destinations";
import { africandestination } from "../../data/africadestination";
import { usadestination } from "../../data/americadestination";
import { europedestination } from "../../data/europedestination";
const Recomendation = () => {
  const [selected, setSelected] = useState("Africa");

  const handleSelect = (continent) => {
    setSelected(continent);
  };
  const getDestinationData = () => {
    switch (selected) {
      case "Asia":
        return destinations; // Use the data for Asia
      case "Europe":
        return europedestination; // Use the data for Europe
      case "Africa":
        return africandestination; // Use the data for Africa
      case "America":
        return usadestination; // Use the data for America
      default:
        return destinations; // Default to destinations data
    }
  };
  const destinationData = getDestinationData();

  return (
    <main className="recommendation" id="places">
      <h1>Recommended Destination</h1>
      <header className="recommdation_header">
        <div
          className={selected === "Asia" ? "selected" : ""}
          onClick={() => handleSelect("Asia")}>
          Asia
        </div>
        <div
          className={selected === "Europe" ? "selected" : ""}
          onClick={() => handleSelect("Europe")}>
          Europe
        </div>
        <div
          className={selected === "Africa" ? "selected" : ""}
          onClick={() => handleSelect("Africa")}>
          Africa
        </div>
        <div
          className={selected === "America" ? "selected" : ""}
          onClick={() => handleSelect("America")}>
          America
        </div>
      </header>

      <div className="grid_places">
        {destinationData.map((item, index) => {
          return (
            <div className="each_place" key={index}>
              <div className="image_div">
                <img src={item.image} alt="" />
              </div>
              <h2>{item.country}</h2>
              <p>{item.text}</p>
              <div className="lower_data">
                <div className="icons_data">
                  <div className="icons">
                    {item.icon1}
                    {item.icon2}
                    {item.icon3}
                  </div>

                  <div className="kilometre_class">
                    <span>{item.kilometers}</span>
                  </div>
                </div>
                <div>
                  <span>{item.money}</span>
                  <span>{item.approx}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Recomendation;
