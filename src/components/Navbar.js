import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/testy">Testové obory</Link>
      <Link to="/qr">Generátor QR</Link>
    </nav>
  )
}

export default Navbar
// opravit 