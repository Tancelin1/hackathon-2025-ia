import React from 'react';
import './PollutionStats.css';

const PollutionStats = () => {
  const stats = [
    {
      icon: '🏭',
      title: 'Émissions annuelles',
      value: '626 millions',
      unit: 'tonnes CO₂',
      description: 'Émissions des centres de données IA en 2023'
    },
    {
      icon: '💡',
      title: 'Consommation énergétique',
      value: '10-50x',
      unit: 'plus élevée',
      description: 'qu\'une recherche Google classique'
    },
    {
      icon: '🌊',
      title: 'Consommation d\'eau',
      value: '700 000',
      unit: 'litres/jour',
      description: 'pour refroidir un datacenter de ChatGPT'
    },
    {
      icon: '📈',
      title: 'Croissance prévue',
      value: '+300%',
      unit: 'd\'ici 2030',
      description: 'de la consommation énergétique de l\'IA'
    }
  ];

  return (
    <section className="pollution-stats">
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title">L'Impact Environnemental de l'IA</h2>
          <p className="stats-subtitle">
            Des chiffres qui donnent à réfléchir sur notre utilisation de l'intelligence artificielle
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <h3 className="stat-title">{stat.title}</h3>
                <div className="stat-value">
                  <span className="value">{stat.value}</span>
                  <span className="unit">{stat.unit}</span>
                </div>
                <p className="stat-description">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="comparison-section">
          <h3 className="comparison-title">Pour mettre en perspective...</h3>
          <div className="comparison-grid">
            <div className="comparison-item">
              <span className="comparison-icon">🚗</span>
              <span className="comparison-text">
                Une requête ChatGPT = 4,6 km en voiture
              </span>
            </div>
            <div className="comparison-item">
              <span className="comparison-icon">✈️</span>
              <span className="comparison-text">
                Entraîner GPT-3 = 552 tonnes CO₂ (1 aller-retour Paris-NY pour 200 personnes)
              </span>
            </div>
            <div className="comparison-item">
              <span className="comparison-icon">🏠</span>
              <span className="comparison-text">
                Un modèle IA consomme autant qu'une maison pendant 4 ans
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PollutionStats;
