import React, { useState, useCallback } from "react";
import Question from "./Question";
import quizCompleteImg from "../assets/quiz-complete.png";
import Questions from "../questions.js";

function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [answers, setAnswer] = useState([]);
  const questionIndex =
    (answerState === "" ? answers.length : answers.length - 1) ?? 0;
  const activeQuestion = Questions[questionIndex];
  const quizIsComplete = Questions.length == questionIndex;

  const handleSelectAnswer = useCallback(
    selectedAnswer => {
      setAnswerState("answered");
      setAnswer(prevState => {
        return [...prevState, selectedAnswer];
      });
      setTimeout(() => {
        if (selectedAnswer === activeQuestion.answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [questionIndex]
  );

  const skipAnswer = useCallback(() => {
    return handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  return (
    <>
      {!quizIsComplete ? (
        <div id="quiz">
          <Question
            key={questionIndex}
            activeQuestion={activeQuestion}
            answerState={answerState}
            answers={answers}
            skipAnswer={skipAnswer}
            handleSelectAnswer={handleSelectAnswer}
          />
        </div>
      ) : (
        <div id="summary">
          <img src={quizCompleteImg} alt="Thophy" />
          <h2>Quiz Completed!</h2>
        </div>
      )}
    </>
  );
}

export default Quiz;
