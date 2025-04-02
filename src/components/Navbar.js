import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Domů</Link>
      <Link to="/tests">Testy</Link>
      <Link to="/qr">QR generátor</Link>
    </nav>
  );
};

export default Navbar;
