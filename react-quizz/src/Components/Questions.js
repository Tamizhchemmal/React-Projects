import React from "react";
import Options from "./Options";

export default function Questions({ questions, dispatch }) {
  console.log(questions);
  return (
    <div>
      <h2>{questions.question}</h2>
      <Options question={questions} dispatch={dispatch} />
    </div>
  );
}
