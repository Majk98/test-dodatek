import { useState } from 'react';

const questions = [
  {
    question: 'Which sentence is grammatically correct?',
    options: [
      'She don’t like pizza.',
      'She doesn’t likes pizza.',
      'She doesn’t like pizza.',
      'She not like pizza.'
    ],
    correctAnswer: 'She doesn’t like pizza.'
  },
  {
    question: 'Choose the correct past tense of the verb "go":',
    options: ['goed', 'gone', 'went', 'going'],
    correctAnswer: 'went'
  },
  {
    question: 'Which is a correct conditional sentence?',
    options: [
      'If I will see her, I tell her.',
      'If I see her, I will tell her.',
      'If I seen her, I would tell her.',
      'If I seeing her, I told her.'
    ],
    correctAnswer: 'If I see her, I will tell her.'
  },
  {
    question: 'Choose the correct sentence:',
    options: [
      'There is too much people here.',
      'There are too many people here.',
      'There is too many people here.',
      'There are too much people here.'
    ],
    correctAnswer: 'There are too many people here.'
  },
  {
    question: 'What is the correct form of the verb in this sentence: "He _____ to work every day."',
    options: ['go', 'goes', 'going', 'gone'],
    correctAnswer: 'goes'
  }
];


const EnglishTest = () => {
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
        <h2>Anglický gramatický test</h2>
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
  
  export default EnglishTest;