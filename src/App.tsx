import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import StartYourSearch from "./pages/StartYourSearch";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/start-your-search" element={<StartYourSearch />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
