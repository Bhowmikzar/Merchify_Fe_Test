import React from "react";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";

function QuizResult(props) {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="show-score">
        Your Score:{props.score}
        <br />
        Total Score:{props.totalScore}
      </div>
      <button id="next-button" onClick={handleClose}>
        Try Again
      </button>
    </>
  );
}

export default QuizResult;
