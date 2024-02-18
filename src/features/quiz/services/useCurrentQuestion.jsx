
function setIndexCurrentQuestion(index) {
    localStorage.setItem("currentQuestion", index);
}

function useIndexCurrentQuestion() {
    const index = localStorage.getItem("currentQuestion");
    if (!index) return;
    return parseInt(index);
}

export { setIndexCurrentQuestion, useIndexCurrentQuestion };