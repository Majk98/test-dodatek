//čast projektu k projektu my-scio 

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TestSelection from "./pages/TestSelection";
import QRCodeGenerator from "./pages/QrCodeGenerator";
import Test1 from "./pages/tests/osp/test1"; 
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/testy" element={<TestSelection />} />
        <Route path="/qr" element={<QRCodeGenerator />} />
        <Route path="/test/1" element={<Test1 />} /> 
      </Routes>
    </Router>
  );
};

export default App;



// překopirovat do projektu my-scio a puvodni app smazat!!!!!!!!!!!!!!!§
 