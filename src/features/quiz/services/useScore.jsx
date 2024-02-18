
function putShowScore(value) {
    localStorage.setItem("showScore", value);
}

function getShowScore() {
    const showScore = localStorage.getItem("showScore");
    if (showScore === null || showScore === "false") return false;
    return true;
}

function putScore(score) {
    localStorage.setItem("score", JSON.stringify(score));
}

function getScore() {
    const score = localStorage.getItem("score");
    if (!score) return;
    return JSON.parse(score);
}

function resetAll() {
    localStorage.removeItem("data");
    localStorage.removeItem("currentQuestion");
  }

export { putScore, getScore, getShowScore, putShowScore, resetAll };