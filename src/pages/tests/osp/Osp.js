import { Link } from "react-router-dom";
// opravit chyby!!!!!!!§

const OSP = () => {
  return (
    <div className="container">
      <h2>Vyber si test z OSP</h2>
      <div className="test-grid">
        <div className="test-card">
          <h3>Test 1 - Logické myšlení</h3>
          <p>Procvičování logikky a vzorců.</p>
          <Link to="/osp/test1" className="test-link">Spustit test</Link>
        </div>



        <div className="test-card">
          <h3>Test 2 - Analytické myšlení</h3>
          <p>Test analytického myšlení.</p>
          <Link to="/osp/test2" className="test-link">Spustit test</Link>
        </div>
      </div>
    </div>
  );
};

export default OSP
