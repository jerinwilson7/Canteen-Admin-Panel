import React from "react";
import { HomePage, LoginPage } from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
