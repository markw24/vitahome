'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation'; // Import from 'next/navigation'
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

// Define the questions array
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
  {
    id: 17, // Question 7 - Main Question Header
    question: "More Lighting Questions:",
    options: [], // No options for the main header question
    subQuestions: [
      {
        id: 18,
        question: "Can you turn a light on beside your bed without getting out of bed?",
        options: ["Yes", "No"],
      },
      {
        id: 19,
        question: "Do you have bright lights at your front and back doors when going outside at night?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    id: 20, // Question 8 - Main Question Header
    question: "Usual Chairs or couches:",
    options: [], // No options for the main header question
    subQuestions: [
      {
        id: 21,
        question: "Does your chair have deep or soft cushions?",
        options: ["Yes", "No"],
      },
      {
        id: 22,
        question: "Does it take more than one attempt to get up out of your sitting chair?",
        options: ["Yes", "No"],
      },
      {
        id: 23,
        question: "Can you lower yourself into your chair in a controlled manner?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    id: 24, // Question 9 - Main Question Header
    question: "Questions about your bed:",
    options: [], // No options for the main header question
    subQuestions: [
      {
        id: 25,
        question: "Is your bed the right height for you (not too high or low)?",
        options: ["Yes", "No"],
      },
      {
        id: 26,
        question: "Does it take several attempts to get up from the side of the bed?",
        options: ["Yes", "No"],
      },
      {
        id: 27,
        question: "Can you lower yourself into your bed in a controlled manner?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    id: 28, // Question 10 - Main Question Header
    question: "Questions about your toilet:",
    options: [], // No options for the main header question
    subQuestions: [
      {
        id: 29,
        question: "Is the toilet the right height (with or without a raised seat)?",
        options: ["Yes", "No"],
      },
      {
        id: 30,
        question: "Do you have a grab rail fitted beside the toilet?",
        options: ["Yes", "No"],
      },
      {
        id: 31,
        question: "Is it a long walk from your toilet to the bedroom?",
        options: ["Yes", "No"],
      },
      {
        id: 32,
        question: "Is the toilet seat attached securely?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    id: 33, // Question 11 - Main Question Header
    question: "Do you get into the bath tub to bathe?",
    options: ["Yes", "No"], // Options for the main header question
    subQuestions: [
      {
        id: 34,
        question: "Can you safely step over the edge of the bath?",
        options: ["Yes", "No"],
      },
      {
        id: 35,
        question: "Do you use non-slip mats or strips in the bath tub?",
        options: ["Yes", "No"],
      },
      {
        id: 36,
        question: "Do you have a grab rail that you can use beside the bath?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    id: 37, // Question 12 - Main Question Header
    question: "Do you use a shower over the bath?",
    options: ["Yes", "No"], // Options for the main header question
    subQuestions: [
      {
        id: 38,
        question: "Do you stand in the bath to shower?",
        options: ["Yes", "No"],
      },
      {
        id: 39,
        question: "Do you use a bath board/seat, or anything to hold onto while getting in and out of the bath when showering?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    id: 40, // Question 13 - Main Question Header
    question: "Do you use a shower recess or walk-in shower?",
    options: ["Yes", "No"], // Options for the main header question
    subQuestions: [
      {
        id: 41,
        question: "Can you safely get into the shower?",
        options: ["Yes", "No"],
      },
      {
        id: 42,
        question: "Do you have a grab bar, or anything to hold onto while getting into the shower?",
        options: ["Yes", "No"],
      },
      {
        id: 43,
        question: "Do you use non-slip mats, or strips in the shower?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    id: 44, // Question 14 - Main Question Header
    question: "Can you reach commonly used items in the kitchen without bending, climbing or standing on something?",
    options: ["Yes", "No"], // Options for the main header question
  },
  {
    id: 45, // Question 15 - Main Question Header
    question: "Do you have steps or stairs at home (Indoors or outdoors)?",
    options: ["Yes", "No"], // Options for the main header question
    subQuestions: [
      {
        id: 46,
        question: "Are any of the steps too high or too small?",
        options: ["Yes", "No"],
      },
      {
        id: 47,
        question: "Are there full length handrails available for all INDOOR steps or stairs at home?",
        options: ["Yes", "No"],
      },
      {
        id: 48,
        question: "Are there full length hand rails available for all OUTDOOR steps or stairs at home?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    id: 49, // Question 16 - Main Question Header
    question: "Is there a landing at all of the entrance doors?",
    options: ["Yes", "No"], // Options for the main header question
    subQuestions: [
      {
        id: 50,
        question: "Is it easy to lock and unlock the entrance door?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    id: 51, // Question 17 - Main Question Header
    question: "These questions are about your yard at home:",
    options: [], // No options for the main header question
    subQuestions: [
      {
        id: 52,
        question: "Are your outdoor paths cracked or contain loose pieces?",
        options: ["Yes", "No"],
      },
      {
        id: 53,
        question: "Do you have gravel walkways at home?",
        options: ["Yes", "No"],
      },
      {
        id: 54,
        question: "Are there any objects across your paths?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    id: 55, // Question 18 - Main Question Header
    question: "Do you go barefoot at home (Indoors or outside)?",
    options: ["Yes", "No"], // Options for the main header question
  },
  {
    id: 56, // Question 19 - Main Question Header
    question: "These questions are about your shoes:",
    options: [], // No options for the main header question
    subQuestions: [
      {
        id: 57,
        question: "Do you have supportive shoes when walking indoors or outdoors?",
        options: ["Yes", "No"],
      },
      {
        id: 58,
        question: "Are your shoes firm fitting?",
        options: ["Yes", "No"],
      },
      {
        id: 59,
        question: "Do your shoes have a non-slip sole?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    id: 60, // Question 20 - Main Question Header
    question: "Are you responsible for any animals at home?",
    options: ["Yes", "No"], // Options for the main header question
    subQuestions: [
      {
        id: 61,
        question: "Do they get underfoot, or disturb your balance at any point?",
        options: ["Yes", "No"],
      },
      {
        id: 62,
        question: "Do you have to exercise your pets (e.g., walk a dog)?",
        options: ["Yes", "No"],
      },
    ],
  },
];

// Define the score mapping
const scoreMapping = {
  1: { Yes: -1, No: 0 },
  2: { Yes: 0, No: 0 },
  3: { Yes: 1, No: -1 },
  4: { Yes: 1, No: -1 },
  5: { Yes: 0, No: 0 },
  6: { Yes: 1, No: -1 },
  7: { Yes: 1, No: -1 },
  8: { Yes: -1, No: 0 },
  9: { Yes: 0, No: 0 },
  10: { Yes: -1, No: 0 },
  11: { Yes: -1, No: 0 },
  12: { Yes: -1, No: 0 },
  13: { Yes: 0, No: 0 },
  14: { Yes: -1, No: 0 },
  15: { Yes: -1, No: 0 },
  16: { Yes: -1, No: 0 },
  17: { Yes: 0, No: 0 },
  18: { Yes: -1, No: 0 },
  19: { Yes: -1, No: 0 },
  20: { Yes: 0, No: 0 },
  21: { Yes: -1, No: 0 },
  22: { Yes: -1, No: 0 },
  23: { Yes: 0, No: 0 },
  24: { Yes: 0, No: 0 },
  25: { Yes: 1, No: 0 },
  26: { Yes: -1, No: 0 },
  27: { Yes: 0, No: 0 },
  28: { Yes: 0, No: 0 },
  29: { Yes: 1, No: -1 },
  30: { Yes: 0, No: -1 },
  31: { Yes: -1, No: 0 },
  32: { Yes: 0, No: -1 },
  33: { Yes: 0, No: 0 },
  34: { Yes: -1, No: 0 },
  35: { Yes: -1, No: 0 },
  36: { Yes: -1, No: 0 },
  37: { Yes: 0, No: 0 },
  38: { Yes: -1, No: 0 },
  39: { Yes: -1, No: 0 },
  40: { Yes: 0, No: 0 },
  41: { Yes: -1, No: 0 },
  42: { Yes: -1, No: 0 },
  43: { Yes: -1, No: 0 },
  44: { Yes: 0, No: 0 },
  45: { Yes: 0, No: 0 },
  46: { Yes: -1, No: 0 },
  47: { Yes: -1, No: 0 },
  48: { Yes: -1, No: 0 },
  49: { Yes: 0, No: 0 },
  50: { Yes: -1, No: 0 },
  51: { Yes: 0, No: 0 },
  52: { Yes: -1, No: 0 },
  53: { Yes: -1, No: 0 },
  54: { Yes: -1, No: 0 },
  55: { Yes: 0, No: 0 },
  56: { Yes: 0, No: 0 },
  57: { Yes: -1, No: 0 },
  58: { Yes: -1, No: 0 },
  59: { Yes: -1, No: 0 },
  60: { Yes: 0, No: 0 },
  61: { Yes: -1, No: 0 },
  62: { Yes: -1, No: 0 },
};

export default function SurveyPage() {
  const [step, setStep] = useState(1);
  const [responses, setResponses] = useState({});
  const [error, setError] = useState("");
  const [score, setScore] = useState(0);
  const router = useRouter(); // Use the next/navigation router

  const currentQuestion = questions.find((_, index) => index + 1 === step);

  const handleNext = () => {
    if (currentQuestion.options.length > 0 && !responses[currentQuestion.id]) {
      setError("Please answer the current question before proceeding.");
      return;
    }

    if (currentQuestion.options.length > 0 && scoreMapping[currentQuestion.id]) {
      const response = responses[currentQuestion.id];
      const currentScore = scoreMapping[currentQuestion.id][response] ?? 0;
      setScore(prevScore => prevScore + currentScore);
    }

    if (currentQuestion.subQuestions) {
      for (let subQuestion of currentQuestion.subQuestions) {
        if (
          (currentQuestion.options.length === 0 || responses[currentQuestion.id] === "Yes") &&
          !responses[subQuestion.id]
        ) {
          setError("Please answer all sub-questions before proceeding.");
          return;
        }

        if (scoreMapping[subQuestion.id]) {
          const response = responses[subQuestion.id];
          const subQuestionScore = scoreMapping[subQuestion.id][response] ?? 0;
          setScore(prevScore => prevScore + subQuestionScore);
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
    if (currentQuestion.options.length > 0 && !responses[currentQuestion.id]) {
      setError("Please answer the current question before submitting.");
      return;
    }

    if (currentQuestion.options.length > 0 && scoreMapping[currentQuestion.id]) {
      const response = responses[currentQuestion.id];
      const currentScore = scoreMapping[currentQuestion.id][response] ?? 0;
      setScore(prevScore => prevScore + currentScore);
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

        if (scoreMapping[subQuestion.id]) {
          const response = responses[subQuestion.id];
          const subQuestionScore = scoreMapping[subQuestion.id][response] ?? 0;
          setScore(prevScore => prevScore + subQuestionScore);
        }
      }
    }

    setError("");

    // Navigate to the recommendations page with the final score
    router.push(`/recommendations?score=${score}`);
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
