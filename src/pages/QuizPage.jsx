import React, { useState } from 'react';
import './QuizPage.css';

const QuizPage = ({ onNext }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      question: "Combien de CO₂ une requête texte ChatGPT émet-elle ?",
      options: [
        "0,02 g de CO₂",
        "0,2 g de CO₂",
        "2 g de CO₂",
        "20 g de CO₂"
      ],
      correct: 1,
      explanation: "Une requête texte ChatGPT émet jusqu'à 0,2 g de CO₂.",
      equivalence: "5 fois plus qu'une recherche Google (0,04 g) et consomme 0,34 Wh + 5 litres d'eau",
      realLifeEquivalence: "🚗 Comme faire 1 mètre en voiture ou 🌬️ respirer pendant 30 secondes !",
      source: "Source : Données OpenAI et études Carbon Brief (2024)"
    },
    {
      question: "Quelle est l'empreinte carbone d'une génération d'image IA (DALL-E, Midjourney) ?",
      options: [
        "0,1 g de CO₂",
        "1 g de CO₂",
        "10 g de CO₂",
        "100 g de CO₂"
      ],
      correct: 1,
      explanation: "Générer une image avec l'IA émet jusqu'à 1 g de CO₂ et consomme 2 Wh d'électricité.",
      equivalence: "Équivalent à charger un smartphone à 100% + 5-10 litres d'eau",
      realLifeEquivalence: "🚗 Comme parcourir 5 mètres en voiture ou ☕ préparer une tasse de thé !",
      source: "Source : Analyses Midjourney/DALL-E et mesures énergétiques (2024)"
    },
    {
      question: "Combien de CO₂ émet la génération d'une vidéo IA (Sora, RunwayML) ?",
      options: [
        "5 g de CO₂",
        "25 g de CO₂",
        "50 g de CO₂",
        "500 g de CO₂"
      ],
      correct: 2,
      explanation: "Générer une vidéo avec l'IA émet jusqu'à 50 g de CO₂ et consomme 110 Wh.",
      equivalence: "Équivalent à une machine à laver complète (cycle basse température) + 50-100 litres d'eau",
      realLifeEquivalence: "🚗 Comme rouler 250 mètres en voiture ou 🚿 prendre une douche de 3 minutes !",
      source: "Source : Estimations OpenAI Sora et RunwayML (2024)"
    },
    {
      question: "Quelle est l'empreinte d'une conversation vocale de 2 minutes avec une IA ?",
      options: [
        "0,07 g de CO₂",
        "0,7 g de CO₂",
        "7 g de CO₂",
        "70 g de CO₂"
      ],
      correct: 1,
      explanation: "Une conversation vocale de 2 minutes avec l'IA émet environ 0,7 g de CO₂.",
      equivalence: "Consomme 1,5 Wh = allumer une ampoule LED 10W pendant 6-12 minutes",
      realLifeEquivalence: "🚗 Comme faire 3,5 mètres en voiture ou 💡 regarder la TV pendant 2 minutes !",
      source: "Source : Mesures assistants vocaux IA et calculs énergétiques (2024)"
    },
    {
      question: "Combien de CO₂ émet la génération d'un site web complet avec l'IA ?",
      options: [
        "2,5 g de CO₂",
        "12,5 g de CO₂",
        "25 g de CO₂",
        "250 g de CO₂"
      ],
      correct: 2,
      explanation: "Générer un site web avec l'IA émet jusqu'à 25 g de CO₂ et consomme 50 Wh.",
      equivalence: "Équivalent à faire fonctionner un four micro-ondes pendant 15 minutes",
      realLifeEquivalence: "🚗 Comme parcourir 125 mètres en voiture ou 📱 utiliser son smartphone pendant 5h !",
      source: "Source : Plateformes de génération web IA et analyses énergétiques (2024)"
    }
  ];

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correct ? 1 : 0);
    }, 0);
  };

  const getScoreMessage = (score) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "🏆 Expert en IA écologique !";
    if (percentage >= 60) return "🌱 Bonne connaissance des enjeux !";
    if (percentage >= 40) return "📚 Il y a encore à apprendre...";
    return "🌍 Sensibilisation nécessaire !";
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="quiz-page">
        <div className="quiz-container">
          <div className="results-section">
            <h1 className="results-title">🎯 Résultats du Quiz</h1>
            <div className="score-card">
              <div className="score-display">
                <span className="score-number">{score}</span>
                <span className="score-total">/ {questions.length}</span>
              </div>
              <p className="score-message">{getScoreMessage(score)}</p>
              <div className="score-percentage">
                {Math.round((score / questions.length) * 100)}% de bonnes réponses
              </div>
            </div>

            <div className="answers-review">
              <h3>📋 Récapitulatif des réponses</h3>
              {questions.map((question, index) => (
                <div key={index} className="answer-item">
                  <div className="question-summary">
                    <span className="question-number">Q{index + 1}</span>
                    <span className={`answer-status ${answers[index] === question.correct ? 'correct' : 'incorrect'}`}>
                      {answers[index] === question.correct ? '✅' : '❌'}
                    </span>
                  </div>
                  <div className="explanation">
                    <strong>Réponse correcte :</strong> {question.options[question.correct]}
                    <br />
                    <em>{question.explanation}</em>
                  </div>
                </div>
              ))}
            </div>

            <button className="continue-btn" onClick={onNext}>
              Voir le Bilan Final 📊
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <div className="quiz-header">
          <h1 className="quiz-title">🧠 Quiz IA & Environnement</h1>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <p className="question-counter">
            Question {currentQuestion + 1} sur {questions.length}
          </p>
        </div>

        <div className="question-section">
          <h2 className="question-text">
            {questions[currentQuestion].question}
          </h2>
          
          {!showAnswer ? (
            <div className="options-grid">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="option-btn"
                  onClick={() => handleAnswer(index)}
                >
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span className="option-text">{option}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="answer-reveal">
              <div className="selected-answer">
                <h3 className="answer-title">Votre réponse :</h3>
                <div className={`answer-option ${selectedAnswer === questions[currentQuestion].correct ? 'correct' : 'incorrect'}`}>
                  <span className="option-letter">{String.fromCharCode(65 + selectedAnswer)}</span>
                  <span className="option-text">{questions[currentQuestion].options[selectedAnswer]}</span>
                  <span className="answer-status">
                    {selectedAnswer === questions[currentQuestion].correct ? '✅ Correct' : '❌ Incorrect'}
                  </span>
                </div>
              </div>

              <div className="correct-answer">
                <h3 className="answer-title">Bonne réponse :</h3>
                <div className="answer-option correct">
                  <span className="option-letter">{String.fromCharCode(65 + questions[currentQuestion].correct)}</span>
                  <span className="option-text">{questions[currentQuestion].options[questions[currentQuestion].correct]}</span>
                  <span className="answer-status">✅ Correct</span>
                </div>
              </div>

              <div className="answer-details">
                <div className="explanation-card">
                  <h4 className="detail-title">📝 Explication</h4>
                  <p className="detail-text">{questions[currentQuestion].explanation}</p>
                </div>

                <div className="equivalence-card">
                  <h4 className="detail-title">⚖️ Équivalence technique</h4>
                  <p className="detail-text">{questions[currentQuestion].equivalence}</p>
                </div>

                <div className="real-life-equivalence-card">
                  <h4 className="detail-title">🌍 En termes concrets</h4>
                  <p className="detail-text real-life-text">{questions[currentQuestion].realLifeEquivalence}</p>
                </div>

                <div className="source-card">
                  <h4 className="detail-title">📚 Source</h4>
                  <p className="detail-text source-text">{questions[currentQuestion].source}</p>
                </div>
              </div>

              <button className="next-question-btn" onClick={handleNextQuestion}>
                {currentQuestion < questions.length - 1 ? (
                  <>Question suivante <span className="btn-arrow">→</span></>
                ) : (
                  <>Voir les résultats <span className="btn-arrow">🎯</span></>
                )}
              </button>
            </div>
          )}
        </div>

        <div className="quiz-info">
          <p className="info-text">
            💡 Testez vos connaissances sur l'impact environnemental de l'intelligence artificielle
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
