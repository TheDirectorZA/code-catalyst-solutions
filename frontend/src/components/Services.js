import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service">
          <img src="/images/service1.jpg" alt="Service 1" />
          <h3>Custom Software Development</h3>
          <p>We build custom software solutions tailored to meet the specific needs of your business.</p>
        </div>
        <div className="service">
          <img src="/images/service2.jpg" alt="Service 2" />
          <h3>Cloud Solutions</h3>
          <p>Leverage the power of the cloud with our cutting-edge cloud computing solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
