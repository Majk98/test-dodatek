import { Link } from "react-router-dom";

const ZsvOverview = () => {
    return (
      <div className="container">
        <h2>Testy ZSV</h2>
        <div className="test-grid">
          <div className="test-card">
            <h3>Společenské vědy – test 1</h3>
            <p>Procvič si základní znalosti ze ZSV.</p>
            <Link to="/zsv/test1" className="test-link">Spustit test</Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default ZsvOverview;