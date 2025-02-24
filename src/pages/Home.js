import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Home = () => {
  const texts = [
    "SCIO testy - příprava na úspěch!",
    "Zlepši své výsledky s našimi testy!",
    "Připrav se na přijímačky efektivně!",
  ];
  const [randomText, setRandomText] = useState("")

  useEffect(() => {
    setRandomText(texts[Math.floor(Math.random() * texts.length)])
  }, []);

  return (
    <div className="container home">
      <div className="hero-section">
        <h1 className="highlight">{randomText}</h1>
        <p>Testuj se .</p>
        <Link className="cta-button" to="/testy">Vyzkoušet testy</Link>
      </div>
    </div>
  )
}

export default Home


// css vyměnit za tailwind
// smazat QR code 
// přepsat home 


//