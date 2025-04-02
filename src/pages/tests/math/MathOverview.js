import { Link } from "react-router-dom";

const MathOverview = () => {
  return (
    <div className="container">
      <h2>Matematika - Testy</h2>
      <div className="test-grid">
        <div className="test-card">
          <h3>Test 1 - Aritmetika</h3>
          <p>Procvič násobení, dělení a číselné řady.</p>
          <Link to="/math/test" className="test-link">
            Spustit test
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MathOverview;
