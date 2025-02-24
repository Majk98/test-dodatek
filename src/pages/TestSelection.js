import { Link } from "react-router-dom"

const TestSelection = () => {
  const subjects = ["OSP", "ZSV - zatím bez testu", "Matematika - zatím bez testu", "Angličtina - zatím bez testu", "Přírodní vědy - zatím bez testu"]
// podivat se na učebnici react str. 29

  return (
    <div className="container">
      <h2>Cvičné testy na scio!!!</h2>
      <div className="test-grid">
        {subjects.map((subject, index) => (
          <div key={index} className="test-card">
            <h3>{subject}</h3>
            <p>Popis testu {index + 1}</p>
            <Link to={`/test/${index + 1}`} className="test-link">Spustit test</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestSelection

// změnit text mužu i <button type="button" onClick=(buttonHandler)>změnit </button>

//nezapomenout obalit do <div>