import React, { useState, useEffect } from 'react';
import './FinalStatsPage.css';

const FinalStatsPage = ({ sessionData, onRestart }) => {
  const [sessionDuration, setSessionDuration] = useState(0);
  
  useEffect(() => {
    const duration = Math.round((Date.now() - sessionData.startTime) / 1000 / 60); // en minutes
    setSessionDuration(duration);
  }, [sessionData.startTime]);

  // Calculs des émissions avec les nouveaux chiffres
  const websiteCreationCO2 = 25; // g de CO2 pour créer le site (nouvelles données)
  const sessionBrowsingCO2 = sessionDuration * 0.2; // 0.2g par minute de navigation (plus précis)
  const totalCO2 = sessionData.co2Emitted + websiteCreationCO2 + sessionBrowsingCO2;

  // Équivalences au quotidien mises à jour
  const equivalences = [
    {
      icon: '�',
      title: 'Charge smartphone',
      value: Math.round(totalCO2 / 1 * 10) / 10,
      unit: 'charges',
      description: 'Nombre de charges complètes de smartphone'
    },
    {
      icon: '�',
      title: 'Recherches Google',
      value: Math.round(totalCO2 / 0.04),
      unit: 'recherches',
      description: 'Équivalent en recherches Google'
    },
    {
      icon: '�',
      title: 'Ampoule LED 10W',
      value: Math.round(totalCO2 / 0.1 * 10) / 10,
      unit: 'heures',
      description: 'Temps d\'éclairage LED'
    },
    {
      icon: '💧',
      title: 'Eau consommée',
      value: Math.round(sessionData.imagesGenerated * 7.5),
      unit: 'litres',
      description: 'Eau utilisée pour vos générations'
    }
  ];

  const globalStats = [
    {
      title: 'Requête texte IA',
      value: '0,2g',
      unit: 'CO₂',
      description: '5x plus qu\'une recherche Google (0,04g)'
    },
    {
      title: 'Génération image',
      value: '1g',
      unit: 'CO₂',
      description: 'Équivalent à charger un smartphone'
    },
    {
      title: 'Génération vidéo',
      value: '50g',
      unit: 'CO₂',
      description: 'Comme une machine à laver complète'
    },
    {
      title: 'Site web complet',
      value: '25g',
      unit: 'CO₂',
      description: 'Micro-ondes pendant 15 minutes'
    }
  ];

  return (
    <div className="final-stats-page">
      <div className="stats-container">
        <div className="page-header">
          <h1 className="page-title">📊 Bilan de Votre Session</h1>
          <p className="page-subtitle">
            Découvrez l'impact réel de votre navigation et des générations d'images
          </p>
        </div>

        <div className="session-summary">
          <h2 className="section-title">🎯 Votre Impact Personnel</h2>
          <div className="summary-grid">
            <div className="summary-card highlight">
              <div className="card-icon">🌍</div>
              <div className="card-content">
                <span className="card-value">{totalCO2.toFixed(1)}g</span>
                <span className="card-label">Total CO₂ émis</span>
              </div>
            </div>
            <div className="summary-card">
              <div className="card-icon">🎨</div>
              <div className="card-content">
                <span className="card-value">{sessionData.imagesGenerated}</span>
                <span className="card-label">Images générées</span>
              </div>
            </div>
            <div className="summary-card">
              <div className="card-icon">⏱️</div>
              <div className="card-content">
                <span className="card-value">{sessionDuration}</span>
                <span className="card-label">Minutes passées</span>
              </div>
            </div>
          </div>

          <div className="breakdown">
            <h3 className="breakdown-title">🔍 Détail des émissions</h3>
            <div className="breakdown-items">
              <div className="breakdown-item">
                <span className="breakdown-label">Génération d'images IA</span>
                <span className="breakdown-value">{sessionData.co2Emitted.toFixed(1)}g CO₂</span>
                <div className="breakdown-bar">
                  <div 
                    className="breakdown-fill generation" 
                    style={{ width: `${(sessionData.co2Emitted / totalCO2) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-label">Création du site web</span>
                <span className="breakdown-value">{websiteCreationCO2.toFixed(1)}g CO₂</span>
                <div className="breakdown-bar">
                  <div 
                    className="breakdown-fill creation" 
                    style={{ width: `${(websiteCreationCO2 / totalCO2) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-label">Navigation & serveurs</span>
                <span className="breakdown-value">{sessionBrowsingCO2.toFixed(1)}g CO₂</span>
                <div className="breakdown-bar">
                  <div 
                    className="breakdown-fill browsing" 
                    style={{ width: `${(sessionBrowsingCO2 / totalCO2) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="equivalences-section">
          <h2 className="section-title">⚖️ Équivalences au Quotidien</h2>
          <div className="equivalences-grid">
            {equivalences.map((equiv, index) => (
              <div key={index} className="equivalence-card">
                <div className="equiv-icon">{equiv.icon}</div>
                <div className="equiv-content">
                  <div className="equiv-value">
                    {equiv.value} {equiv.unit}
                  </div>
                  <div className="equiv-title">{equiv.title}</div>
                  <div className="equiv-description">{equiv.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="global-context">
          <h2 className="section-title">🌐 Contexte Global de l'IA</h2>
          <div className="global-grid">
            {globalStats.map((stat, index) => (
              <div key={index} className="global-card">
                <div className="global-value">
                  {stat.value}
                  <span className="global-unit">{stat.unit}</span>
                </div>
                <div className="global-title">{stat.title}</div>
                <div className="global-description">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="call-to-action">
          <h2 className="cta-title">🌱 Et Maintenant ?</h2>
          <p className="cta-description">
            Vous avez découvert l'impact de l'IA sur l'environnement. 
            Chaque utilisation compte, mais la sensibilisation aussi !
          </p>
          
          <div className="action-buttons">
            <button className="action-btn primary" onClick={() => {
              // Simulation du partage
              if (navigator.share) {
                navigator.share({
                  title: 'IA & Environnement',
                  text: `J'ai découvert l'impact environnemental de l'IA ! Ma session a émis ${totalCO2.toFixed(1)}g de CO₂. Et vous ?`,
                  url: window.location.href
                });
              } else {
                // Fallback
                navigator.clipboard.writeText(`J'ai découvert l'impact environnemental de l'IA ! Ma session a émis ${totalCO2.toFixed(1)}g de CO₂. Découvrez le vôtre sur ${window.location.href}`);
                alert('Lien copié dans le presse-papier !');
              }
            }}>
              🔗 Partager mes résultats
            </button>
            <button className="action-btn secondary" onClick={onRestart}>
              🔄 Recommencer l'expérience
            </button>
          </div>

          <div className="final-message">
            <p>
              💚 <strong>Merci</strong> d'avoir pris conscience de l'impact environnemental de l'IA.
              <br />
              Ensemble, utilisons l'intelligence artificielle de manière plus responsable !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalStatsPage;
