
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import Home from "./pages/Home";
import TestSelection from "./pages/TestSelection";
import QRCodeGenerator from "./pages/QrCodeGenerator";
import ErrorPage from './pages/ErrorPage';

import OspOverview from './pages/tests/osp/OspOverview';
import OspLogicalTest from './pages/tests/osp/OspLogicalTest';
import OspAnalyticalTest from './pages/tests/osp/OspAnalyticalTest';

import ZsvOverview from './pages/tests/zsv/ZsvOverview';
import ZsvTest from './pages/tests/zsv/ZsvTest';

import EnglishOverview from "./pages/tests/english/EnglishOverview";
import EnglishTest from "./pages/tests/english/EnglishTest";

import MathOverview from "./pages/tests/math/MathOverview";
import MathTest from "./pages/tests/math/MathTest";

import ScienceOverview from "./pages/tests/science/ScienceOverview";
import ScienceTest from "./pages/tests/science/ScienceTest";




import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tests" element={<TestSelection />} />
        <Route path="/qr" element={<QRCodeGenerator />} />
        
        <Route path="/osp" element={<OspOverview />} />
        <Route path="/osp/logical" element={<OspLogicalTest />} />
        <Route path="/osp/analytical" element={<OspAnalyticalTest />} />

        <Route path="/zsv" element={<ZsvOverview />} />
        <Route path="/zsv/test" element={<ZsvTest />} />

        <Route path="/english" element={<EnglishOverview />} />
        <Route path="/english/test" element={<EnglishTest />} />
        
        <Route path="/math" element={<MathOverview />} />
        <Route path="/math/test" element={<MathTest />} />

        <Route path="/science" element={<ScienceOverview />} />
        <Route path="/science/test" element={<ScienceTest />} />

      

      
  
        
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


