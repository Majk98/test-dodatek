import { Link } from "react-router-dom";

const EnglishOverview = () => {
    return (
      <div className="container">
        <h2>Testy z angličtiny</h2>
        <div className="test-grid">
          <div className="test-card">
            <h3>Anglický jazyk – test 1</h3>
            <p>Procvič si základní znalosti z anglického jazyka.</p>
            <Link to="/english/test" className="test-link">Spustit test</Link>
          </div>
        </div>
      </div>
    );
  }

  export default EnglishOverview;