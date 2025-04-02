import { useState } from "react";

const MathTest = () => {
  const questions = [
    {
      question: "Jaká je hodnota 7 × (2 + 3)?",
      options: ["25", "35", "14", "21"],
      correctAnswer: "35",
    },
    {
      question: "Vypočítejte: 12 − 4 × 2",
      options: ["16", "8", "4", "20"],
      correctAnswer: "4",
    },
    {
      question: "Které číslo je prvočíslo?",
      options: ["4", "9", "11", "21"],
      correctAnswer: "11",
    },
    {
      question: "Pokud x = 3, jaká je hodnota x² + 2x?",
      options: ["15", "18", "9", "11"],
      correctAnswer: "15",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

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
      <h2>Math Test</h2>
      {showResult ? (
        <>
          <h3>Test Result:</h3>
          <p>Your score: {score} out of {questions.length}</p>
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
}
export default MathTest;
