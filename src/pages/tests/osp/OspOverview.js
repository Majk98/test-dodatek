import { Link } from "react-router-dom";

const OspOverview = () => {
    return (
      <div className="container">
        <h2>Testy OSP</h2>
        <div className="test-grid">
          <div className="test-card">
            <h3>Logické myšlení</h3>
            <p>Procvič si schopnost logického uvažování.</p>
            <Link to="/osp/logical" className="test-link">Spustit test</Link>
          </div>
          <div className="test-card">
            <h3>Analytické myšlení</h3>
            <p>Procvičuj dovednosti práce s informacemi.</p>
            <Link to="/osp/analytical" className="test-link">Spustit test</Link>
          </div>
        </div>
      </div>
    );
  };

  export default OspOverview