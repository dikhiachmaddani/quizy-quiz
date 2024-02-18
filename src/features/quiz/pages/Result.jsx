import Layout from "../../../components/layout/Layout";
import PropsTypes from "prop-types";

export default function Result({ score, onPlayAgain, onLogout, onQuiz }) {
    return (
        <Layout>
            <div className="text-center mb-10 text-neutral-primary flex flex-col justify-center items-center">
                <h1 className="text-5xl md:text-6xl mb-4">Result Quiz.</h1>
                <hr className="w-10 border-4" />
            </div>
            <div className="text-white text-md md:text-2xl w-[400px] mx-5 md:mx-0">
                <div className="flex justify-between">
                    <p>Total Answer</p>
                    <p>{`${score.answered}/5`}</p>
                </div>
                <div className="flex justify-between">
                    <p>Total Correct</p>
                    <p>{`${score.correct}`}</p>
                </div>
                <div className="flex justify-between">
                    <p>Total Incorrect</p>
                    <p>{`${score.incorrect}`}</p>
                </div>
            </div>
            <div className="flex items-center justify-center mt-10 gap-5 flex-col-reverse md:flex-row">
                <button onClick={function () { onLogout(); onQuiz(false); }} className="bg-red-500 w-48 h-14 rounded-full text-lg text-neutral-primary">Exit!</button>
                <p className="text-neutral-primary hidden md:block">|</p>
                <button onClick={onPlayAgain} className="bg-primary w-48 h-14 rounded-full text-lg text-neutral-primary">{`Let's Play Again!`}</button>
            </div>
        </Layout>
    )
}

Result.propTypes = {
    score: PropsTypes.object.isRequired,
    onPlayAgain: PropsTypes.func.isRequired,
    onQuiz: PropsTypes.func.isRequired,
    onLogout: PropsTypes.func.isRequired
}