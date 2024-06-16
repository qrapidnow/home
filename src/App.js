import "./App.css";
import Footer from "./Component/Footer/Footer";
import Mid from "./Component/Mid/Mid";
import Navbar from "./Component/Navbar";
import Partner from "./Component/Partner/Partner";
import Reward from "./Component/Reward/Reward";
import Demo from "./Demo/Demo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import New from "./New/New";
import Contact from "./New/Contact";
import Faq from "./New/Faq";
import ScrollToTop from "../src/ScrollToTop";
import Policy from "./New/Policy";
import Terms from "./New/Terms";
import Career from "./New/Career";
import Price from "./Demo/Price";
import Benefits from "./Demo/Benefits";
function MainLayout() {
  return (
    <>
      <Navbar />
      <Mid />
      <Partner />
      <Reward />
      <Footer />
    </>
  );
}

function DemoLayout() {
  return (
    <>
      <Demo />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/demo" element={<DemoLayout />} />
        <Route path="/about" element={<New />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/term" element={<Terms />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Price" element={<Price />} />
        <Route path="/ben" element={<Benefits />} />
      </Routes>
    </Router>
  );
}

export default App;
