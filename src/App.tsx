import React from 'react';

import QuestionCard from "./components/QuestionCard";

function App() {

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
      <QuestionCard/>
      <button className="next" onClick={nextQuesiton}>Next Question</button>
    </div>
  );
}

export default App;