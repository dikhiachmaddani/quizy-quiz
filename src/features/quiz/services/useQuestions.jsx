import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const useQuestions = () => {
  const [questions, setQuestions] = useState(getQuestions() || []);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchQuestions() {
    setIsLoading(true);
    try {
      const data = await axios.get('https://opentdb.com/api.php?amount=5&type=multiple&difficulty=easy&category=18');
      
      data.data.results.map((value) => {
        const randomIndex = Math.floor(Math.random() * value.incorrect_answers.length + 1);
        value.incorrect_answers.splice(randomIndex, 0, value.correct_answer);
      });

      localStorage.setItem("data", JSON.stringify(data));
      setQuestions(data.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchQuestions()
  }, []);

  return {
    questions,
    isLoading
  }
}

export function getQuestions() {
  const data = localStorage.getItem("data");
  if (!data) return;
  const { results } = JSON.parse(data);
  return results;
}