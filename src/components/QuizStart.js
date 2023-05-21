import React, { useState } from "react";
import "./QuizStart.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

function QuizStart() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStartQuiz = () => {
    setOpen(false);
  };

  return (
    <div className="centered">
      <Button variant="contained" className="button" onClick={handleOpen}>
        Start Quiz
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ color: "blue" }}>Quiz Rules</DialogTitle>
        <DialogContent>
          <ol>
            <li>Here are the rules of the quiz:</li>
            <li>Here are the rules of the quiz:</li>
            <li>Here are the rules of the quiz:</li>
            <li>Here are the rules of the quiz:</li>
          </ol>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Link to="/Quiz" style={{ textDecoration: "none" }}>
            <Button onClick={handleStartQuiz}>Let's Go</Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default QuizStart;
