import React from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

const Question = ({
  activeQuestion,
  answers,
  answerState,
  handleSelectAnswer,
  skipAnswer
}) => {
  return (
    <div id="question">
      <QuestionTimer timeout={15000} onTimeout={skipAnswer} />
      <p>{activeQuestion.text}</p>
      <Answers
        answers={activeQuestion.answers}
        selectedAnswer={answers[answers.length - 1]}
        answerState={answerState}
        onSelectAwnser={handleSelectAnswer}
      />
    </div>
  );
};

export default Question;
