import React, {useState} from 'react';

//Fetching Questions from the API
import {Difficulty, fetchQuizQuestions, QuestionState} from "./API";

//Question Card
import QuestionCard from "./components/QuestionCard";

//Generating Styles
import {GlobalStyle, Wrapper} from "./App.styles";


export type AnswerObject = {
    question: string,
    answer: string,
    correct: boolean,
    correctAnswer: string
}

const TOTAL_QUESTIONS = 10;

function App() {

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    // console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

    const startQuiz = async () =>
    {
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTIONS, Difficulty.EASY
        );
        console.log(newQuestions);
        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);

    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>
    {
        if(!gameOver)
        {
            //Getting the user's answer
            const answer = e.currentTarget.value;

            //Compare user's answer and correct answer
            const correct = questions[number].correct_answer === answer;

            if(correct)
            {
                setScore(prev => prev +1 );
            }

            //Save user's answer in the usersAnswers array
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            };

            setUserAnswers(prev => [...prev, answerObject]);
        }
    };

    const nextQuesiton = () =>
    {
        //moving on to the next question
        const nextQuestion = number + 1;

        if(nextQuestion === TOTAL_QUESTIONS)
        {
            setGameOver(true);
        } else
        {
            setNumber(nextQuestion);
        }

    };

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <h1>QUIZ APP</h1>
                {
                    gameOver || userAnswers.length === TOTAL_QUESTIONS ?
                        (
                            <button className="start" onClick={startQuiz}>Start</button>
                        )
                        : null
                }

                {
                    !gameOver? <p className="score">Score : {score}</p>:null
                }

                {
                    loading? <p>Loading Questions...</p>:null
                }

                {
                    !loading && !gameOver?
                        (
                            <QuestionCard
                                questionNumber={number+1}
                                totalQuestions={TOTAL_QUESTIONS}
                                question={questions[number].question}
                                answers={questions[number].answers}
                                userAnswer={userAnswers ? userAnswers[number]: undefined}
                                callback={checkAnswer}
                            />
                        ):null
                }

                {
                    userAnswers.length === number+1 && !loading && !gameOver && number != TOTAL_QUESTIONS -1 ?
                        (
                            <button className="next" onClick={nextQuesiton}>Next Question</button>
                        ): null
                }

            </Wrapper>
        </>
    );
}

export default App;
