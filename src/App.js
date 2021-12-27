import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>App Placeholder</div>} />
      <Route path="/search" element={<></>} />
    </Routes>
  );
}

export default App;
