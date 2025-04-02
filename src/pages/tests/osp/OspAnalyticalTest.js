import { useState } from 'react';

const questions = [
  {
    question: 'Petr má dvakrát více knih než Jana. Jana má o 5 knih více než Martin. Martin má 10 knih. Kolik knih má Petr?',
    options: ['10', '30', '20', '25'],
    correctAnswer: '30'
  },
  {
    question: 'Na tabuli je napsáno číslo. Pokud ho vynásobíme 3 a odečteme 6, dostaneme 12. Jaké je původní číslo?',
    options: ['4', '6', '5', '3'],
    correctAnswer: '6'
  },
  {
    question: 'Pokud 5 strojů vyrobí 5 výrobků za 5 minut, jak dlouho bude trvat 100 strojům vyrobit 100 výrobků?',
    options: ['5 minut', '100 minut', '1 minuta', '50 minut'],
    correctAnswer: '5 minut'
  },
  {
    question: 'Číslo je dělitelné 2 i 3. Které z následujících čísel to může být?',
    options: ['8', '12', '15', '18'],
    correctAnswer: '12'
  },
  {
    question: 'Pokud vlak jede rychlostí 60 km/h a potřebuje urazit 180 km, jak dlouho mu to bude trvat?',
    options: ['2 hodiny', '3 hodiny', '4 hodiny', '2.5 hodiny'],
    correctAnswer: '3 hodiny'
  }
];

const OspAnalyticalTest = () => {
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
          <h2>Test OSP – Analytické myšlení</h2>
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
    
    export default OspAnalyticalTest;
    