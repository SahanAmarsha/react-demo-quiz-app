import React, {useState} from 'react';
import {Difficulty, fetchQuizQuestions} from "./API";
import QuestionCard from "./components/QuestionCard";

const TOTAL_QUESTIONS = 10;

function App() {

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

  const startQuiz = async () =>
  {

  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>
  {

  };

  const nextQuesiton = () =>
  {

  };

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startQuiz}>Start</button>

      <p className="score">Score :</p>
      <p>Loading Questions...</p>
      {/*<QuestionCard*/}
      {/*  questionNumber={number+1}*/}
      {/*  totalQuestions={TOTAL_QUESTIONS}*/}
      {/*  question={questions[number].question}*/}
      {/*  answers={questions[number].answers}*/}
      {/*  userAnswer={userAnswers ? userAnswers[number]: undefined}*/}
      {/*  callback={checkAnswer}*/}
      {/*/>*/}
      <button className="next" onClick={nextQuesiton}>Next Question</button>
    </div>
  );
}

export default App;
