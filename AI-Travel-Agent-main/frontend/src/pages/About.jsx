import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg1 from '../assets/images/about-1.jpeg';
import aboutImg2 from '../assets/images/about-2.jpeg';
import aboutImg3 from '../assets/images/about-3.jpeg';

import '../styles/about.css';

const About = () => {
  return (
    <section className="about__section">
      {/* Intro section */}
      <div className="about__block">
        <div className="about__text">
          <h2>About Our Platform</h2>
          <p>
            Welcome to our smart travel booking platform, where your journey begins. We make it easy to explore, discover, and book incredible tours around the world — all in just a few clicks.
          </p>
        </div>
        <div className="about__image">
          <img src={aboutImg1} alt="About us" />
        </div>
      </div>

      {/* Tours section */}
      <div className="about__block">
        <div className="about__text">
          <h2>Tailored Tours for Every Explorer</h2>
          <p>
            Find your next unforgettable experience among our curated list of tours. Whether you're traveling solo, with friends, or as a family, our platform offers options designed to match your travel style and preferences. Explore our available <Link to="/tours" className="about__link">tours</Link> and get inspired.
          </p>
        </div>
        <div className="about__image">
          <img src={aboutImg2} alt="Tours" />
        </div>
      </div>

      {/* AI travel agent section */}
      <div className="about__block">
        <div className="about__text">
          <h2>Powered by AI Travel Assistant</h2>
          <p>
            Our intelligent travel agent helps you build the perfect travel itinerary — from flights and hotels to restaurants and daily activity planning. Just enter your travel dates, number of travelers, and budget. Try our <Link to="/chatbot" className="about__link">AI assistant</Link> today and start designing your ideal trip.
          </p>
        </div>
        <div className="about__image">
          <img src={aboutImg3} alt="AI assistant" />
        </div>
      </div>
    </section>
  );
};

export default About;
