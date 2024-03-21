import React from "react";

export default function StartScreen({ qslength, dispatch }) {
  return (
    <div>
      <h2>Welcome to the React Quizz</h2>
      <h3>{qslength} questions to test your React </h3>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "start" });
        }}
      >
        Let's Go
      </button>
    </div>
  );
}
