import React from "react";

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: string;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard:React.FC<Props> =  ({
                                           question,
                                           answers,
                                           callback,
                                           userAnswer,
                                           questionNumber,
                                           totalQuestions
                                       }) => (
    <div>
        <p className="number">
            Question: {questionNumber} / {totalQuestions}
        </p>

        <p dangerouslySetInnerHTML={{__html: question}} />

        <div>
            {answers.map((answer: any) => (
                <div>
                    <button disabled={userAnswer === answers[questionNumber-1]} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html : answer}} />
                    </button>
                </div>

                ))}
        </div>
    </div>
);

export default QuestionCard;