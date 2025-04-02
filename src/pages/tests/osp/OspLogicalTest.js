import { useState } from 'react';

const questions = [
  {
    question: 'Pokud všichni studenti jsou lidé a někteří lidé jsou učitelé, co z toho vyplývá?',
    options: [
      'Všichni studenti jsou učitelé',
      'Někteří studenti jsou učitelé',
      'Někteří učitelé jsou lidé',
      'Všichni lidé jsou studenti'
    ],
    correctAnswer: 'Někteří učitelé jsou lidé'
  },
  {
    question: 'Jaké číslo následuje v řadě: 2, 4, 8, 16, ?',
    options: ['18', '24', '32', '20'],
    correctAnswer: '32'
  },
  {
    question: 'Jestliže dnes je pondělí, co bude za 17 dní?',
    options: ['Středa', 'Pátek', 'Neděle', 'Sobota'],
    correctAnswer: 'Čtvrtek'
  },
  {
    question: 'Kolik trojúhelníků vidíš na obrázku, pokud máš čtverec rozdělený dvěma úhlopříčkami?',
    options: ['2', '4', '6', '8'],
    correctAnswer: '4'
  },
  {
    question: 'Pokud je každé auto vozidlo a některá vozidla jsou autobusy, co z toho vyplývá?',
    options: [
      'Všechna auta jsou autobusy',
      'Některé autobusy nejsou vozidla',
      'Některá vozidla nejsou auta',
      'Každý autobus je auto'
    ],
    correctAnswer: 'Některá vozidla nejsou auta'
  }
];

const OspLogicalTest = () => {
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
      <h2>Test OSP – Logické myšlení</h2>
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

export default OspLogicalTest;
