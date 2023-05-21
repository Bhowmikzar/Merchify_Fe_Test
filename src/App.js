import React from "react";
import Quiz from "./Pages/Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizStart from "./components/QuizStart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizStart />}></Route>
          <Route path="/Quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
