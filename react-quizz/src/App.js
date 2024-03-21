import { useEffect, useReducer } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "./index.css";
import Loader from "./Components/Loader";
import Error from "./Components/Error";
import StartScreen from "./Components/StartScreen";
import Questions from "./Components/Questions";

const Initialstate = {
  questions: [],
  //loading, ready., error,acctive , finished
  status: "loading",
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "received":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "failed":
      return {
        ...state,
        status: "error",
      };

    case "start":
      return {
        ...state,
        status: "active",
      };

    case "newAnswer":
      return {
        ...state,
        answer: action.payload,
      };
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    Initialstate
  );

  const qesLength = questions.length;

  useEffect(function datafetching() {
    fetch("http://localhost:9000/questions")
      .then((data) => data.json())
      .then((data) => dispatch({ type: "received", payload: data }))
      .catch((err) => dispatch({ type: "failed" }));
  }, []);
  return (
    <>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen qslength={qesLength} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Questions questions={questions[index]} dispatch={dispatch} />
        )}
      </Main>
    </>
  );
}

export default App;
