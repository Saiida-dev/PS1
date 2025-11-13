import React from 'react';
import howImg from '../assets/images/how.jpg';
import howImg1 from '../assets/images/JJ(2).png';
import '../styles/how.css';

const How = () => {
  return (
    <section className="how__section">
      {/* Bloc principal texte + image */}
      <div className="container how__block">
        <div className="how__text">
          <h2>How it works</h2>
          <p>
            Welcome to our smart travel booking platform, where your journey begins.
            We make it easy to explore, discover, and book incredible tours around
            the world — all in just a few clicks.
          </p>
        </div>
        <div className="how__image">
          <img src={howImg} alt="How it works" />
        </div>
      </div>

      {/* Image du bas */}
      <div className="how__bottom-image">
        <img src={howImg1} alt="Illustration" />
      </div>
    </section>
  );
};

export default How;
