import Layout from "../../../components/layout/Layout";
import PropsTypes from "prop-types";

export default function Intruction({ onLogout, onStarted, onQuiz }) {

    return (
        <Layout>
            <div className="text-center mb-10 text-neutral-primary flex flex-col justify-center items-center">
                <h1 className="text-5xl md:text-6xl mb-4">Intruction!</h1>
                <hr className="w-10 border-4" />
            </div>
            <div className="text-white text-md md:text-xl sm:w-[525px] md:w-[550px] mx-5 md:mx-0">
                <p className="mb-4">There are several things you must pay attention to when playing Quizy Quiz:</p>
                <ul className="list-disc list-outside ml-4">
                    <li>There are 5 multiple choice questions.</li>
                    <li>The quiz duration is 60 seconds.</li>
                    <li>Each question can only be done and displayed once.</li>
                    <li>When the answer has been selected, the next question will automatically be displayed.</li>
                    <li>If the browser accidentally closes, you can still continue working on the questions.</li>
                </ul>
            </div>
            <div className="flex items-center justify-center mt-10 gap-5 flex-col-reverse md:flex-row">
                <button onClick={function () { onLogout(); onQuiz(false); }} className="bg-red-500 w-48 h-14 rounded-full text-lg text-neutral-primary">Exit!</button>
                <p className="text-neutral-primary hidden md:block">|</p>
                <button onClick={onStarted} className="bg-primary w-48 h-14 rounded-full text-lg text-neutral-primary">{`Let's Play!`}</button>
            </div>
        </Layout>
    )
}

Intruction.propTypes = {
    onLogout: PropsTypes.func.isRequired,
    onQuiz: PropsTypes.func.isRequired,
    onStarted: PropsTypes.func.isRequired
}