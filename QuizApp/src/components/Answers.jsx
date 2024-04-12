import React, { useRef } from "react";

const Answers = ({ answers, answerState, selectedAnswer, onSelectAwnser }) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    console.log(answers);
    console.log(shuffledAnswers.current);
    shuffledAnswers.current = [...answers];
    console.log(shuffledAnswers.current);
    shuffledAnswers.current.sort(() => {
      Math.random() - 0.5;
    });
    console.log(shuffledAnswers.current);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map(answer => {
        let cssClass = "answerButton";
        if (selectedAnswer === answer) {
          cssClass =
            answerState === "answered"
              ? "answerButton selected"
              : answerState === "correct"
              ? "answerButton correct"
              : answerState === "wrong"
              ? "answerButton wrong"
              : "answerButton";
        }

        return (
          <li key={answer} className="answer">
            <button
              disabled={answerState != ""}
              className={cssClass}
              onClick={() => {
                onSelectAwnser(answer);
              }}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
