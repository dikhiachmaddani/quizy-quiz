import Layout from "../../components/layout/Layout";
import { useQuestions } from "./services/useQuestions";
import parse from 'html-react-parser';
import { randomBackgroundColor } from "../../utils/random-background";
import { letterMultipleChoice } from "../../utils/letter-multiple-choice";
import { useCountDown } from "./services/useCountDown";
import PropsTypes from "prop-types";
import { useState } from "react";
import { setIndexCurrentQuestion, useIndexCurrentQuestion } from "./services/useCurrentQuestion";
import { useEffect } from "react";
import { getScore, getShowScore, putScore, putShowScore, resetAll } from "./services/useScore";
import Result from "./pages/Result";
import Intruction from "./pages/Intruction";
import { getRunnerQuiz, setRunnerQuiz } from "./services/useRunnerQuiz";

const initialScore = { answered: 0, correct: 0, incorrect: 0 };

export default function Quiz({ duration, onLogout }) {
    const { timeLeft, start } = useCountDown();
    const { questions, isLoading } = useQuestions();
    const [currentQuestion, setCurrentQuestion] = useState(useIndexCurrentQuestion() || 0);
    const [showScore, setShowScore] = useState(getShowScore() || false);
    const [score, setScore] = useState(getScore() || initialScore)
    const [runQuiz, setRunQuiz] = useState(getRunnerQuiz() || false);


    const onQuiz = (data) => {
        setRunnerQuiz(data);
        setRunQuiz(data);
    };

    const onStarted = () => {
        onQuiz(true);
        start(duration);
    }

    const displayScore = () => {
        setShowScore(true);
        putShowScore(true);
        setCurrentQuestion(0);
        putScore(score);
        start(0);
        resetAll();
    };

    useEffect(() => {
        if (timeLeft === 0) displayScore();
    }, [timeLeft]);


    const onAnswerClick = ({ target }) => {
        if (target.value === questions[currentQuestion].correct_answer) {
            setScore((prev) => {
                const newScore = {
                    ...prev,
                    answered: prev.answered + 1,
                    correct: prev.correct + 1,
                };
                putScore(newScore);
                return newScore;
            });
        } else {
            setScore((prev) => {
                const newScore = {
                    ...prev,
                    answered: prev.answered + 1,
                    incorrect: prev.incorrect + 1,
                };
                putScore(newScore);
                return newScore;
            });
        }

        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setIndexCurrentQuestion(nextQuestion);
        } else {
            displayScore();
        }
    };

    const onPlayAgain = () => {
        onQuiz(true);
        start(duration);
        putScore(initialScore);
        putShowScore(false);
        setScore(initialScore);
        setShowScore(false);
    };

    if (showScore) return <Result score={score} onPlayAgain={onPlayAgain} onLogout={onLogout} onQuiz={onQuiz} />

    if (!showScore && runQuiz && questions.length) {
        return (
            <Layout>
                {isLoading ? <p className="text-neutral-primary text-5xl">waiting for question...</p> :
                    <div className=" w-9/12 mx-5 md:mx-0">
                        <div className="flex justify-between items-center text-white mb-4">
                            <p className="text-md md:text-2xl font-medium">Question {currentQuestion + 1} of 5</p>
                            <p className="text-md md:text-lg font-medium">{timeLeft}</p>
                        </div>
                        <h1 className="text-4xl text-white font-bold mb-8">{parse(questions[currentQuestion].question)}</h1>
                        <div className="flex flex-col gap-8">
                            {questions[currentQuestion].incorrect_answers.map((answer, index) => {
                                return (
                                    <button key={index} onClick={onAnswerClick} value={answer} className={`p-6 text-left text-neutral-primary hover:scale-105 transition-all duration-150 ${randomBackgroundColor()}`}>
                                        {`${letterMultipleChoice(index)} ${parse(answer)}`}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                }
            </Layout>
        )
    }

    return <Intruction onLogout={onLogout} onStarted={onStarted} onQuiz={onQuiz} />
}

Quiz.propTypes = {
    duration: PropsTypes.number.isRequired,
    onLogout: PropsTypes.func.isRequired
}