import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Examples from './pages/examples';
import Skills from './pages/skills';
import Playlist from './pages/playlist';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
