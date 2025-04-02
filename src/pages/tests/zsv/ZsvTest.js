import { useState } from 'react';

const questions = [
  {
    question: 'Kdo je autorem díla "Ústava České republiky"?',
    options: [
      'Václav Havel',
      'František Koukolík',
      'Petr Pithart a kolektiv',
      'Miloš Zeman'
    ],
    correctAnswer: 'Petr Pithart a kolektiv'
  },
  {
    question: 'Jaký je hlavní cíl OSN?',
    options: [
      'Vytváření zákonů',
      'Udržení mezinárodního míru a bezpečnosti',
      'Rozvoj průmyslu',
      'Zavedení jednotné měny'
    ],
    correctAnswer: 'Udržení mezinárodního míru a bezpečnosti'
  },
  {
    question: 'Kolik komor má Parlament ČR?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2'
  },
  {
    question: 'Která ideologie klade důraz na rovnost a státní vlastnictví?',
    options: ['Liberalismus', 'Konzervatismus', 'Komunismus', 'Anarchismus'],
    correctAnswer: 'Komunismus'
  },
  {
    question: 'Který stát je členem Evropské unie?',
    options: ['Norsko', 'Švýcarsko', 'Srbsko', 'Polsko'],
    correctAnswer: 'Polsko'
  }
];

const ZsvTest = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
  
    const handleAnswer = (answer) => {
      setSelectedAnswer(answer);
      if (answer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
      const next = currentQuestion + 1;
      setTimeout(() => {
        if (next < questions.length) {
          setCurrentQuestion(next);
          setSelectedAnswer(null);
        } else {
          setShowResult(true);
        }
      }, 800);
    };
    
    
    return (
        <div className="container">
          <h2>Test ZSV – Společenské vědy</h2>
          {showResult ? (
            <>
              <h3>Výsledek testu:</h3>
              <p>Tvůj výsledek: {score} z {questions.length}</p>
            </>
          ) : (
            <div>
              <h3>{questions[currentQuestion].question}</h3>
              <ul>
                {questions[currentQuestion].options.map((option, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleAnswer(option)}
                      className={`answer-button ${selectedAnswer === option ? 'selected' : ''}`}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    };
    
    export default ZsvTest;