import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<main>App Placeholder</main>} />
        <Route path="/search" element={<h1>Search Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
