import { useEffect, useState } from "react";
import { fetchQuizData } from "../Services/Api.js";

import "./Quiz.css";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [correctAnswered, setCorrectAnswered] = useState(0);
  const [incorrectAnswered, setIncorrectAnswered] = useState(0);
  const [timer, setTimer] = useState(0); 
  const [feedbackMessage, setFeedbackMessage] = useState("");


  useEffect(() => {
    fetchQuizData().then((data) => setQuestions(data.questions || []));
  }, []);

 
  useEffect(() => {
    let interval;
    if (quizStarted && !isOptionSelected) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval); 
  }, [quizStarted, isOptionSelected]);

  const handleAnswer = (answer) => {
    if (isOptionSelected) return;

    setSelectedAnswer(answer);
    setIsOptionSelected(true);


 
    if (answer.is_correct) {
      setScore((prev) => prev + 4.0);
      setCorrectAnswered((prev) => prev + 1);
      setFeedbackMessage("Congratulations, keep it up! 🎉");
    } else {
      setIncorrectAnswered((prev) => prev + 1);
      setFeedbackMessage("Try again! 💪");
    }
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsOptionSelected(false);
      setTimer(0); 
      setFeedbackMessage(""); 
    } else {
      setShowResults(true);
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
    
  };

  const totalQuestions = questions.length;
  const accuracy = totalQuestions > 0 ? ((correctAnswered / totalQuestions) * 100).toFixed(2) : 0;

  const currentQuestion = questions[currentIndex];

  return (
    <div className="quiz-container">
      {!quizStarted ? (
        <div className="start-container">
          <h2 className="start-title">Welcome to the Quiz!</h2>
          <button onClick={startQuiz} className="start-button">
            Start Quiz
          </button>
        </div>
      ) : showResults ? (
        <div className="results-container">
          <h2 className="results-title">Quiz Completed!</h2>
          <p className="results-score">Your Score: {score} points</p>
          <p className="results-metric">Correct Answers: {correctAnswered}</p>
          <p className="results-metric">Incorrect Answers: {incorrectAnswered}</p>
          <p className="results-metric">Accuracy: {accuracy}%</p>
          
        </div>
      ) : (
        currentQuestion && (
          <div className="question-container">
      
            <div className="stats-container">
              <div className="score-display">
                <span>Score:</span>
                <span>{score}</span>
              </div>
              <div className="timer-display">
                <span>Time Taken:</span>
                <span>{timer}s</span>
              </div>
            </div>

      
            <h2 className="question-description">{currentQuestion.description}</h2>
            <ul className="options-list">
              {currentQuestion.options.map((option, id) => {
                let optionClass = "option-item";
                if (isOptionSelected) {
                  if (option.is_correct) {
                    optionClass += " option-correct";
                  } else if (option === selectedAnswer && !option.is_correct) {
                    optionClass += " option-incorrect";
                  }
                }

                return (
                  <li
                    key={id}
                    className={optionClass}
                    onClick={() => handleAnswer(option)}
                  >
                    {option.description}
                  </li>
                );
              })}
            </ul>

            {isOptionSelected && (
              <span className={`feedback-message ${selectedAnswer?.is_correct ? "correct" : "incorrect"}`}>
                {feedbackMessage}
              </span>
            )}

       
            <button
              onClick={nextQuestion}
              className="next-button"
              disabled={!isOptionSelected}
            >
              {currentIndex + 1 < questions.length ? "Next" : "Finish"}
            </button>

     
            {isOptionSelected && currentQuestion.detailed_solution && (
              <div className="detailed-solution">
                <h3>Explanation:</h3>
                <p>{currentQuestion.detailed_solution}</p>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Quiz;