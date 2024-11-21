// pages/student.js
'use client';

import { useState, useEffect } from 'react';

export default function Student() {
  const [quizzes, setQuizzes] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function fetchQuizzes() {
      const res = await fetch('/api/quizzes');
      const data = await res.json();
      setQuizzes(data.data);
    }
    fetchQuizzes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let correctAnswers = 0;
    quizzes.forEach((quiz, index) => {
      if (answers[index] === quiz.answer) {
        correctAnswers++;
      }
    });
    setResult(`You got ${correctAnswers} out of ${quizzes.length} correct.`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-6">
      <h1 className="text-2xl font-bold mb-4">Student Page</h1>
      {result ? (
        <p className="text-lg text-green-500">{result}</p>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
          {quizzes.map((quiz, index) => (
            <div key={index} className="mb-6">
              <p className="text-gray-700 text-base font-bold mb-2">{quiz.question}</p>
              {quiz.options.map((option, i) => (
                <div key={i} className="mb-2">
                  <input
                    type="radio"
                    id={`q${index}o${i}`}
                    name={`question${index}`}
                    value={option}
                    onChange={(e) =>
                      setAnswers({ ...answers, [index]: e.target.value })
                    }
                    required
                    className="mr-2 leading-tight"
                  />
                  <label htmlFor={`q${index}o${i}`} className="text-gray-700">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
