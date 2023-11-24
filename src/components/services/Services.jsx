import React from "react";
import "./Services.css";
import { servicesdata } from "../../data/servicesdata";

const Services = () => {
  console.log(servicesdata);
  return (
    <section className="services">
      {servicesdata.map((service, index) => (
        <div key={index} className="servicess_card">
          {service.icon}
          <h3>{service.title}</h3>
          <p>{service.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Services;
