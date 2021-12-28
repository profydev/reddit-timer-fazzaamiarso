import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<div>App Placeholder</div>} />
        <Route path="/search" element={<></>} />
      </Routes>
    </>
  );
}

export default App;
