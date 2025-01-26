"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface Question {
  id: number;
  q: string;
  a: string[];
  t: number;
  p?: string;
}

const PageBContent = () => {
  const searchParams = useSearchParams();
  const search: number = Number(searchParams.get("d"));

  const [data, setData] = useState([]);
  const [result, setRes] = useState();
  const [click, setClick] = useState(0);
  const [truea, setTrue] = useState(0);
  const [falsea, setFalse] = useState(0);
  const [indexa, setIndex] = useState(0);
  const [paginationColors, setPaginationColors] = useState<string[]>([]);
  const [answered, setAnswered] = useState<boolean[]>(new Array(10).fill(false)); // Assuming max 10 questions for now

  useEffect(() => {
    fetch("/api/get_data")
      .then((response) => response.json())
      .then((result) => {
        const a = Object.keys(result);
        setData(result[a[search]]); // set Data correctly
        setPaginationColors(new Array(result[0].length).fill(""));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [search]);

  const handleAnswerClick = (questionIndex: number, answerIndex: number, correctAnswerIndex: number) => {
    const buttons = document.querySelectorAll(`.a${questionIndex}`) as NodeListOf<HTMLButtonElement>;
    buttons.forEach((button) => {
      button.disabled = true; // disable all buttons after an answer is selected
    });

    if (answered[questionIndex]) return; // Return if this question has already been answered

    const clickedButton = document.getElementById(`${questionIndex}-${answerIndex}`) as HTMLButtonElement;

    if (answerIndex + 1 === correctAnswerIndex) {
      clickedButton.style.backgroundColor = "#4caf50";
      clickedButton.style.color = "white";
      addTrueA();
      setPaginationColors((prevColors) => {
        const updatedColors = [...prevColors];
        updatedColors[questionIndex] = "bg-green-500";
        return updatedColors;
      });
      setAnswered((prev) => {
        const updatedAnswered = [...prev];
        updatedAnswered[questionIndex] = true;
        return updatedAnswered;
      });
    } else {
      clickedButton.style.backgroundColor = "#f44336";
      clickedButton.style.color = "white";
      addFalseA();
      setPaginationColors((prevColors) => {
        const updatedColors = [...prevColors];
        updatedColors[questionIndex] = "bg-red-500";
        return updatedColors;
      });

      const correctButton = document.getElementById(`${questionIndex}-${correctAnswerIndex - 1}`) as HTMLButtonElement;
      correctButton.style.backgroundColor = "#4caf50";
      correctButton.style.color = "white";
    }
  };

  function addTrueA() {
    setTrue(truea + 1);
  }

  function addFalseA() {
    setFalse(falsea + 1);
  }

  const clickPrev = () => {
    if (indexa > 0) {
      setIndex(indexa - 1);
    }
  };

  const clickNext = () => {
    if (indexa < data.length - 1) {
      setIndex(indexa + 1);
    }
  };

  return (
    <>
      <div className="flex pr-10 pl-10 md:justify-center lg:justify-center border-solid rounded-sm overflow-hidden">
        <div className="flex items-center overflow-x-auto space-x-2 scrollbar-hide">
          <div className="border h-10 w-20 flex justify-center items-center cursor-pointer" onClick={clickPrev}>
            &#x2190;
          </div>
          {data.map((_, i) => (
            <div
              key={i}
              className={`border size-10 min-w-10 flex justify-center items-center ${indexa === i ? "shadow-gray-600 shadow-inner" : ""} ${
                paginationColors[i]
              }`}
              id={`p${i + 1}`}
              onClick={() => setIndex(i)}
            >
              {i + 1}
            </div>
          ))}
          <div className="border h-10 w-20 flex justify-center items-center cursor-pointer" onClick={clickNext}>
            &#x2192;
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        {data.map((question: Question, index: number) => (
          <div
            className={`p-6 m-5 w-96 mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4 text-center ${
              index === indexa ? "block" : "hidden"
            }`}
            key={index}
          >
            {question.p ? (
              <div>
                <img src={question.p} alt={`Photo for question ${index + 1}`} />
              </div>
            ) : null}
            <div className="font-bold">{question.q}</div>
            <ul>
              {question.a.map((answer: string, i: number) => (
                <button
                  key={i}
                  className={`a${index} border-b-2 shadow-sm rounded-md p-2 w-80`}
                  id={`${index}-${i}`}
                  onClick={() => handleAnswerClick(index, i, question.t)}
                >
                  {answer}
                </button>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

const PageB = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageBContent />
    </Suspense>
  );
};

export default PageB;
