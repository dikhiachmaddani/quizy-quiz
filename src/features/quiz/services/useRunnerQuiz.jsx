
function setRunnerQuiz(runnerQuiz) {
    localStorage.setItem("runnerQuiz", runnerQuiz);
}

function getRunnerQuiz() {
    const runnerQuiz = localStorage.getItem("runnerQuiz");
    if (!runnerQuiz) return;
    return parseInt(runnerQuiz);
}

export { setRunnerQuiz, getRunnerQuiz };