import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div>App Placeholder</div>} />
        <Route path="/search" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
