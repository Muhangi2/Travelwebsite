import React, { useState, useEffect } from "react";
import china from "../../assets/china.jpeg";
import trees from "../../assets/trees.jpeg";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define an array of background images and corresponding text
  const backgrounds = [
    { image: `url(${china})`, text: "Welcome to China\nDiscover its Beauty" },
    { image: `url(${trees})`, text: "Explore the Forest\nFind Serenity" },
    // Add more images and text as needed
  ];

  useEffect(() => {
    // Set up a timer to change the background and text every 5 seconds
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    // Clear the timer when the component is unmounted or dependencies change
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div
      className="hero"
      style={{ backgroundImage: backgrounds[currentIndex].image }}>
      <div className="hero-content">
        <h1>{backgrounds[currentIndex].text}</h1>
      </div>
    </div>
  );
};

export default Hero;
