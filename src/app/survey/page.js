'use client';
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const questions = [
  {
    id: 1,
    question: "Do you use a walking aid to walk around indoors at home?",
    options: ["Yes", "No"],
  },
  {
    id: 2,
    question: "Do you have any floor mats at home?",
    options: ["Yes", "No"],
  },
  {
    id: 3,
    question: "Do all the mats have slip-resistant or rubber backs?",
    options: ["Yes", "No"],
    condition: { questionId: 2, answer: "Yes" },
  },
  {
    id: 4,
    question: "Are all the mats secured to the floor by nails or adhesive?",
    options: ["Yes", "No"],
    condition: { questionId: 2, answer: "Yes" },
  },
  {
    id: 5,
    question: "What is your primary concern?",
    options: ["Mobility", "Safety", "Comfort"],
  },
  {
    id: 6,
    question: "Do you use any assistive devices?",
    options: ["Yes", "No"],
  },
  {
    id: 7,
    question: "Which assistive devices do you use?",
    options: ["Cane", "Walker", "Wheelchair"],
    condition: { questionId: 6, answer: "Yes" },
  },
];

export default function SurveyPage() {
  const [step, setStep] = useState(1);
  const [responses, setResponses] = useState({});
  const [error, setError] = useState("");

  const currentQuestion = questions.find((_, index) => index + 1 === step);

  const handleNext = () => {
    const relevantQuestions = questions.filter(
      (q) =>
        q.id === currentQuestion.id ||
        (q.condition && q.condition.questionId === currentQuestion.id && responses[currentQuestion.id] === q.condition.answer)
    );

    const unanswered = relevantQuestions.some((q) => !responses[q.id]);

    if (unanswered) {
      setError("Please answer all questions before proceeding.");
    } else {
      setError("");

      const newResponses = Object.keys(responses).reduce((acc, key) => {
        const question = questions.find((q) => q.id === parseInt(key));
        if (
          question &&
          (!question.condition ||
            (question.condition.questionId !== currentQuestion.id ||
              responses[currentQuestion.id] === question.condition.answer))
        ) {
          acc[key] = responses[key];
        }
        return acc;
      }, {});

      setResponses(newResponses);
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    setError("");

    const previousQuestion = questions.find((_, index) => index + 1 === step - 1);

    const newResponses = Object.keys(responses).reduce((acc, key) => {
      const question = questions.find((q) => q.id === parseInt(key));
      if (
        question &&
        (!question.condition ||
          (question.condition.questionId !== previousQuestion.id ||
            responses[previousQuestion.id] === question.condition.answer))
      ) {
        acc[key] = responses[key];
      }
      return acc;
    }, {});

    setResponses(newResponses);
  };

  const handleResponseChange = (questionId, response) => {
    setResponses({ ...responses, [questionId]: response });
    setError("");
  };

  const handleSubmit = () => {
    const relevantQuestions = questions.filter(
      (q) =>
        q.id === currentQuestion.id ||
        (q.condition && q.condition.questionId === currentQuestion.id && responses[currentQuestion.id] === q.condition.answer)
    );

    const unanswered = relevantQuestions.some((q) => !responses[q.id]);

    if (unanswered) {
      setError("Please answer all questions before submitting.");
    } else {
      setError("");
      console.log("Survey Responses:", responses);
      // Here you would submit the survey, display recommendations, etc.
    }
  };

  const progressPercentage = (step / questions.length) * 100;

  return (
    <>
      <main className="bg-white min-h-screen">
        <Navbar />
        <div className="flex flex-col py-10 px-20 items-center">
          <h1 className="font-bold text-[#1F5434] text-[40px] font-Playfair pb-10">Home Safety Survey</h1>
          
          {/* Progress Bar */}
          <div className="w-full max-w-lg bg-gray-200 rounded-full h-4 mb-6">
            <div
              className="bg-[#1F5434] h-4 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          {currentQuestion && (
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-[#1F5434]">{currentQuestion.question}</h2>
              <div className="mt-6">
                {currentQuestion.options.map((option) => (
                  <div key={option} className="mb-6">
                    <input
                      type="radio"
                      id={`question-${currentQuestion.id}-${option}`}
                      name={`question-${currentQuestion.id}`}
                      value={option}
                      checked={responses[currentQuestion.id] === option}
                      onChange={(e) => handleResponseChange(currentQuestion.id, e.target.value)}
                    />
                    <label htmlFor={`question-${currentQuestion.id}-${option}`} className="ml-3 text-lg text-gray-700">
                      {option}
                    </label>
                  </div>
                ))}
              </div>

              {error && <p className="text-red-500 mt-4">{error}</p>}

              {/* Conditional Drop-down Questions */}
              {questions
                .filter(
                  (q) =>
                    q.condition &&
                    q.condition.questionId === currentQuestion.id &&
                    responses[currentQuestion.id] === q.condition.answer
                )
                .map((q) => (
                  <div key={q.id} className="w-full bg-white p-6 rounded-lg shadow-lg mt-6">
                    <h3 className="text-xl font-semibold text-[#1F5434]">{q.question}</h3>
                    <div className="mt-4">
                      {q.options.map((option) => (
                        <div key={option} className="mb-4">
                          <input
                            type="radio"
                            id={`question-${q.id}-${option}`}
                            name={`question-${q.id}`}
                            value={option}
                            checked={responses[q.id] === option}
                            onChange={(e) => handleResponseChange(q.id, e.target.value)}
                          />
                          <label htmlFor={`question-${q.id}-${option}`} className="ml-3 text-lg text-gray-700">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

              <div className="mt-8 flex justify-between">
                {step > 1 && (
                  <button
                    onClick={handleBack}
                    className="bg-gray-300 text-gray-700 px-5 py-3 rounded-lg hover:bg-gray-400"
                  >
                    Back
                  </button>
                )}
                {step < questions.length ? (
                  <button
                    onClick={handleNext}
                    className="bg-[#1F5434] text-white px-5 py-3 rounded-lg hover:bg-[#17422a]"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="bg-[#1F5434] text-white px-5 py-3 rounded-lg hover:bg-[#17422a]"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        <Footer />
      </main>
    </>
  );
}
