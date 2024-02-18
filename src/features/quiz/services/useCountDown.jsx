import { useEffect } from "react";
import { useState } from "react";

const useCountDown = () => {
    const [timeLeft, setTimeLeft] = useState(getCount() || -1);

    useEffect(() => {
        setCount(timeLeft);
        if (timeLeft <= 0) return;

        const timeout = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [timeLeft]);

    function start(seconds) {
        setTimeLeft(seconds);
    }

    return { timeLeft, start };
};

function setCount(count) {
    localStorage.setItem("count", count);
}

function getCount() {
    const count = localStorage.getItem("count");
    if (!count) return;
    return parseInt(count);
}

export { useCountDown, setCount, getCount };