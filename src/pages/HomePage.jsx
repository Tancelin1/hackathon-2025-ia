import React from 'react';
import './HomePage.css';

const HomePage = ({ onNext }) => {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="hero-section">
          <div className="hero-icon"> <img src="/vite.png" alt="IA & Environnement" className="hero-image"/></div>
          <h1 className="hero-title">
            IA & ENVIRONNEMENT
          </h1>
          <p className="hero-slogan">
            L'intelligence artificielle transforme notre monde...
            <br />
            <strong>Mais à quel prix pour notre planète ?</strong>
          </p>
          
          <div className="warning-box">
            <span className="warning-icon">⚠️</span>
            <p className="warning-text">
              Une requête ChatGPT émet 0,2g de CO₂ - 5 fois plus qu'une recherche Google
            </p>
          </div>

          <div className="intro-text">
            <p>
              Découvrez l'impact environnemental réel de l'intelligence artificielle 
              à travers une expérience interactive qui vous fera réfléchir...
            </p>
          </div>

          <button className="start-btn" onClick={onNext}>
            <span className="btn-icon">🎯</span>
            Découvrir l'Impact de l'IA
            <span className="btn-arrow">→</span>
          </button>

          <div className="preview-cards">
            <div className="preview-card">
              <span className="preview-icon">🎨</span>
              <span className="preview-text">Génération d'images</span>
            </div>
            <div className="preview-card">
              <span className="preview-icon">📊</span>
              <span className="preview-text">Quiz interactif</span>
            </div>
            <div className="preview-card">
              <span className="preview-icon">📈</span>
              <span className="preview-text">Bilan personnel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;