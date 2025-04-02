import { Link } from 'react-router-dom';

const ScienceOverview = () => {
  return (
    <div className="container">
      <h2>Přírodověda – Výběr testu</h2>
      <div className="test-grid">
        <div className="test-card">
          <h3>Základní znalosti</h3>
          <p>Test na všeobecné znalosti z biologie, fyziky a chemie.</p>
          <Link to="/science/test" className="test-link">Spustit test</Link>
        </div>
      </div>
    </div>
  );
};

export default ScienceOverview;
