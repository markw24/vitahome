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
    subQuestions: [
      {
        id: 3,
        question: "Do all the mats have slip-resistant or rubber backs?",
        options: ["Yes", "No"],
      },
      {
        id: 4,
        question: "Are all the mats secured to the floor by nails or adhesive?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    id: 5, // Question 3
    question: "Do you have any carpeted floors at home?",
    options: ["Yes", "No"],
    subQuestions: [
      {
        id: 6,
        question: "Are the carpets in good condition and free of irregularities (Holes, lumps, tears, loose threads)?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    id: 7, // Question 4
    question: "Do you have any tiles, polished floorboards, or linoleum floors at home?",
    options: ["Yes", "No"],
    subQuestions: [
      {
        id: 8,
        question: "Are they in high traffic areas?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    id: 9, // Question 5
    question: "Do your walkways have:",
    options: [],
    subQuestions: [
      {
        id: 10,
        question: "Cords lying across the floor?",
        options: ["Yes", "No"],
      },
      {
        id: 11,
        question: "Items blocking doorways/doors?",
        options: ["Yes", "No"],
      },
      {
        id: 12,
        question: "Raised thresholds in doorways?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    id: 13, // Question 6 - Main Question Header
    question: "At night when your room lights are on:",
    options: [], // No options for the main header question
    subQuestions: [
      {
        id: 14,
        question: "Are your rooms generally bright enough to read without using a lamp?",
        options: ["Yes", "No"],
      },
      {
        id: 15,
        question: "Do you have any shadows or dark spots in your room?",
        options: ["Yes", "No"],
      },
      {
        id: 16,
        question: "Do you have any dimly lit areas that could be a hazard?",
        options: ["Yes", "No"],
      },
    ],
  },
];

export default function SurveyPage() {
  const [step, setStep] = useState(1);
  const [responses, setResponses] = useState({});
  const [error, setError] = useState("");

  const currentQuestion = questions.find((_, index) => index + 1 === step);

  const handleNext = () => {
    // Check if current question is answered
    if (currentQuestion.options.length > 0 && !responses[currentQuestion.id]) {
      setError("Please answer the current question before proceeding.");
      return;
    }

    // Check if sub-questions should be answered
    if (currentQuestion.subQuestions) {
      for (let subQuestion of currentQuestion.subQuestions) {
        // Only check for sub-question responses if the main question has been answered "Yes" or if there are no main question options
        if (
          (currentQuestion.options.length === 0 || responses[currentQuestion.id] === "Yes") &&
          !responses[subQuestion.id]
        ) {
          setError("Please answer all sub-questions before proceeding.");
          return;
        }
      }
    }

    setError("");
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setError("");
    setStep((prevStep) => prevStep - 1);
  };

  const handleResponseChange = (questionId, response) => {
    setResponses({ ...responses, [questionId]: response });
    setError("");
  };

  const handleSubmit = () => {
    // Same checks as in handleNext
    if (currentQuestion.options.length > 0 && !responses[currentQuestion.id]) {
      setError("Please answer the current question before submitting.");
      return;
    }

    if (currentQuestion.subQuestions) {
      for (let subQuestion of currentQuestion.subQuestions) {
        if (
          (currentQuestion.options.length === 0 || responses[currentQuestion.id] === "Yes") &&
          !responses[subQuestion.id]
        ) {
          setError("Please answer all sub-questions before submitting.");
          return;
        }
      }
    }

    setError("");
    console.log("Survey Responses:", responses);
    // Here you would submit the survey, display recommendations, etc.
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
                {/* Render main question options if available */}
                {currentQuestion.options.length > 0 &&
                  currentQuestion.options.map((option) => (
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

                {/* Always render sub-questions if no main question options or if "Yes" is selected */}
                {currentQuestion.subQuestions &&
                  (currentQuestion.options.length === 0 || responses[currentQuestion.id] === "Yes") &&
                  currentQuestion.subQuestions.map((subQuestion) => (
                    <div key={subQuestion.id} className="mt-6 pl-6 border-l-2 border-gray-300">
                      <h3 className="text-xl font-semibold text-[#1F5434]">{subQuestion.question}</h3>
                      <div className="mt-4">
                        {subQuestion.options.map((option) => (
                          <div key={option} className="mb-4">
                            <input
                              type="radio"
                              id={`question-${subQuestion.id}-${option}`}
                              name={`question-${subQuestion.id}`}
                              value={option}
                              checked={responses[subQuestion.id] === option}
                              onChange={(e) => handleResponseChange(subQuestion.id, e.target.value)}
                            />
                            <label htmlFor={`question-${subQuestion.id}-${option}`} className="ml-3 text-lg text-gray-700">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>

              {error && <p className="text-red-500 mt-4">{error}</p>}

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
