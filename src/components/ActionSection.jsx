import React from 'react';
import './ActionSection.css';

const ActionSection = () => {
  const actions = [
    {
      title: 'Utilisez l\'IA avec modération',
      description: 'Réfléchissez avant chaque requête : en avez-vous vraiment besoin ?',
      icon: '🤔',
      color: '#4caf50'
    },
    {
      title: 'Privilégiez les IA locales',
      description: 'Utilisez des modèles qui tournent sur votre appareil quand c\'est possible',
      icon: '💻',
      color: '#2196f3'
    },
    {
      title: 'Soutenez l\'IA verte',
      description: 'Choisissez des services qui utilisent des énergies renouvelables',
      icon: '🌱',
      color: '#8bc34a'
    },
    {
      title: 'Sensibilisez votre entourage',
      description: 'Partagez ces informations pour créer une prise de conscience collective',
      icon: '📢',
      color: '#ff9800'
    }
  ];

  const resources = [
    {
      title: 'Calculateur d\'empreinte carbone IA',
      description: 'Estimez l\'impact de vos usages',
      image: '🧮',
      link: '#'
    },
    {
      title: 'Guide des IA éco-responsables',
      description: 'Découvrez les alternatives durables',
      image: '📚',
      link: '#'
    },
    {
      title: 'Rapport sur l\'impact environnemental',
      description: 'Études scientifiques récentes',
      image: '📊',
      link: '#'
    }
  ];

  return (
    <section className="action-section">
      <div className="action-container">
        <div className="action-header">
          <h2 className="action-title">Que Pouvons-Nous Faire ?</h2>
          <p className="action-subtitle">
            L'IA n'est pas notre ennemie, mais nous devons l'utiliser de manière responsable
          </p>
        </div>

        <div className="actions-grid">
          {actions.map((action, index) => (
            <div key={index} className="action-card" style={{ '--accent-color': action.color }}>
              <div className="action-icon">{action.icon}</div>
              <h3 className="action-card-title">{action.title}</h3>
              <p className="action-description">{action.description}</p>
              <button className="action-btn">
                En savoir plus
              </button>
            </div>
          ))}
        </div>

        <div className="resources-section">
          <h3 className="resources-title">Ressources Utiles</h3>
          <div className="resources-grid">
            {resources.map((resource, index) => (
              <div key={index} className="resource-card">
                <div className="resource-image">
                  <span className="resource-emoji">{resource.image}</span>
                </div>
                <div className="resource-content">
                  <h4 className="resource-title">{resource.title}</h4>
                  <p className="resource-description">{resource.description}</p>
                  <button className="resource-btn">
                    Accéder <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="call-to-action">
          <div className="cta-content">
            <h3 className="cta-title">Ensemble, Réinventons l'IA Durable</h3>
            <p className="cta-description">
              Chaque petite action compte. Commençons dès aujourd'hui à utiliser l'IA de manière plus consciente et responsable.
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary">
                🌍 Calculer Mon Impact
              </button>
              <button className="cta-btn secondary">
                🤝 Partager Cette Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionSection;
