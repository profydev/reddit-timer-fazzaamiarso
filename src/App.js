import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>App Placeholder</div>} />
        <Route path="/search" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
