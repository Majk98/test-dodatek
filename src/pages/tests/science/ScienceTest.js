import { useState } from "react";

const ScienceTest = () => {
  const questions = [
    {
      question: "Která planeta je nejblíže ke Slunci?",
      options: ["Venuše", "Merkur", "Mars", "Země"],
      correctAnswer: "Merkur",
    },
    {
      question: "Co je hlavní funkcí chlorofylu v rostlinách?",
      options: ["Zásobování vody", "Fotosyntéza", "Podpora růstu", "Opylování"],
      correctAnswer: "Fotosyntéza",
    },
    {
      question: "Kolik kostí má dospělý člověk?",
      options: ["206", "208", "201", "212"],
      correctAnswer: "206",
    },
    {
      question: "Jaký prvek má chemickou značku O?",
      options: ["Zlato", "Ozon", "Kyslík", "Oxid"],
      correctAnswer: "Kyslík",
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
  }
  return (
    <div className="container">
      <h2>Test z přírodních věd</h2>
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
}
export default ScienceTest;