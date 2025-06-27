import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          🤖 IA & 🌍 ENVIRONNEMENT
        </h1>
        <p className="header-slogan">
          L'IA peut être révolutionnaire... mais à quel prix pour notre planète ?
        </p>
        <div className="header-subtitle">
          <span className="warning-icon">⚠️</span>
          Chaque requête IA émet autant de CO₂ qu'un trajet en voiture de 4,6 km
        </div>
      </div>
    </header>
  );
};

export default Header;
