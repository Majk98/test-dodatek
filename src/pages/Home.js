import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TabSection from "../components/TabSection"; 

const Home = () => {
  const texts = [
    "SCIO testy – příprava na úspěch!",
    "Zlepši si výsledky s naším testem.",
    "Připrav se na přijímačky efektivně."
  ];

  const [randomText, setRandomText] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * texts.length);
    setRandomText(texts[randomIndex]);
  }, []);

  return (
    <div className="container">
      <div className="hero-section">
        <h1>
          <span className="highlight">{randomText}</span>
        </h1>
        <p>Připrav se ještě dnes!</p>
        <Link className="cta-button" to="/tests">Vyzkoušet testy</Link>
      </div>

      <div className="test-grid">
        <div className="test-card">
          <img 
            src="/images/Test.webp" 
            alt="Test" 
            style={{ width: "100px", height: "auto", marginBottom: "10px" }}
          />
          <h3>SCIO testy</h3>
          <p>Logické, analytické i obecné znalosti</p>
        </div>

        <div className="test-card">
          <img 
            src="/images/Qr.jpg" 
            alt="QR code" 
            style={{ width: "100px", height: "auto", marginBottom: "10px" }}
          />
          <h3>QR kód generátor</h3>
          <p>Vygeneruj si QR kód pro libovolný text nebo odkaz.</p>
        </div>
      </div>


      <section>
        <TabSection />
      </section>
    </div>
  );
};

export default Home;
