import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} /> {/*fonctionne si l'URL ne correspont a rien de declaré au dessus -- renvoi a l'acceuil*/}
        
        <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;