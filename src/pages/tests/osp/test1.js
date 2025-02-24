import { useState } from "react"

const Test1 = () => {
  const questions = [
    {
      question: "Které číslo logicky následuje v této posloupnosti? 2, 6, 12, 20, ...",
      options: ["30", "24", "28", "26"],
      answer: "30",
    },
    {
      question: "Pokud platí, že každý matematik je logik, ale ne každý logik je matematik, co z toho plyne?",
      options: [
        "Každý logik je matematik",
        "Každý matematik je logik",
        "Žádný logik není matematik",
        "Každý logik je zároveň matematik",
      ],
      answer: "Každý matematik je logik",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion)
        setSelectedAnswer(null)
      }, 1000);
    } else {
      setTimeout(() => {
        setShowResult(true)
      }, 1000)
    }
  };

  return (
    <div className="container">
      <h2>Test OSP - Logické myšlení</h2>

      {showResult ? (
        <div>
          <h3>Test jsi dokončil!!!!!</h3>
          <p>Tvé skóre: {score} / {questions.length}</p>
        </div>
      ) : (
        <div>
          <h3>{questions[currentQuestion].question}</h3>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button
                  className={`answer-button ${selectedAnswer === option ? "selected" : ""}`}
                  onClick={() => handleAnswer(option)}       // 1) toto aktivuje funkci 
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

export default Test1
