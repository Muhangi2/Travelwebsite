import React, { useState, useEffect } from "react";
import beach from "../../assets/beach.jpg";
import islandd from "../../assets/islandd.jpg";
import "./Hero.css";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const backgrounds = [
    { image: `url(${beach})`, text: "Welcome to China\nDiscover its Beauty" },
    { image: `url(${islandd})`, text: "Explore the Forest\nFind Serenity" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero_section">
      <div
        className="hero"
        style={{ backgroundImage: backgrounds[currentIndex].image }}>
        <div className="hero-content">
          <h1 className="multiline-text">{backgrounds[currentIndex].text}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
