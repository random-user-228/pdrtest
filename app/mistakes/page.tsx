'use client';

import Image from 'next/image';
import { ReactElement, useEffect, useState } from 'react';

interface Question {
  id: number;
  q: string;
  a: string[];
  t: number;
  p?: string;
}

export default function Questions() {
  const [data, setData] = useState<Question[] | null>(null);
  const [click, setClick] = useState(0);
  const [truea, setTrue] = useState(0);
  const [falsea, setFalse] = useState(0);
  const [indexa, setIndex] = useState(0);
  const [paginationColors, setPaginationColors] = useState<string[]>([]);

  function clickclick() {
    setClick(click + 1);
  }

  function addTrueA() {
    setTrue(truea + 1);
  }

  function addFalseA() {
    setFalse(falsea + 1);
  }

  useEffect(() => {
    fetch('/api/get_mistakes')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setPaginationColors(new Array(data.length).fill(''));
      });
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500"></div>
          <p className="mt-4 text-lg text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex pr-10 pl-10 md:justify-center lg:justify-center border-solid rounded-sm overflow-hidden">
        <div
          className="flex items-center overflow-x-auto space-x-2 scrollbar-hide"
     
          
        >
          <div className="border h-10 w-20 flex justify-center items-center cursor-pointer">
            &#x2190;
          </div>
          {data.map((_, i) => (
            <div
              key={i}
              className={`border size-10 min-w-10 flex justify-center items-center ${indexa === i ? 'shadow-gray-600 shadow-inner' : ''} ${paginationColors[i]}`}
              id={`p${i + 1}`}
              onClick={() => {
                setIndex(i);
              }}
            >
              {i + 1}
            </div>
          ))}
          <div
            className="border h-10 w-20 flex justify-center items-center cursor-pointer"
            onClick={() => {
              if (indexa < data.length - 1) {
                setIndex(indexa + 1);
              }
            }}
          >
            &#x2192;
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        {data.map((question: Question, index: number): ReactElement => (
          <div
            className={`p-6 m-5 w-96 mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4 text-center ${
              index === indexa ? 'block' : 'hidden'
            }`}
            key={index}
          >
            {question.p ? (
              <div>
                <img
                  src={question.p}
                  alt={`Photo for question ${index + 1}`}
                />
              </div>
            ) : null}
            <div className="font-bold">{question.q}</div>
            <ul>
              {question.a.map((answer: string, i: number): ReactElement => (
                <button
                  key={i}
                  className={`a${index} border-b-2 shadow-sm rounded-md p-2 w-80`}
                  id={`${index}-${i}`}
                  onClick={() => {
                    const buttons = document.querySelectorAll(`.a${index}`) as NodeListOf<HTMLButtonElement>;
                    clickclick();
                    buttons.forEach(button => {
                      button.disabled = true;
                    });
                    const clickedButton = document.getElementById(
                      `${index}-${i}`
                    ) as HTMLButtonElement;

                    if (i + 1 === question.t) {
                      clickedButton.style.backgroundColor = '#4caf50';
                      clickedButton.style.color = 'white';
                      addTrueA();
                      fetch('/api/delete_mistake', {
                        method: 'POST', 
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          id: question.id,
                        }),
                      });

                      setPaginationColors(prevColors => {
                        const updatedColors = [...prevColors];
                        updatedColors[index] = 'bg-green-500';
                        return updatedColors;
                      });
                    } else {
                      clickedButton.style.backgroundColor = '#f44336';
                      clickedButton.style.color = 'white';
                      addFalseA();

                      setPaginationColors(prevColors => {
                        const updatedColors = [...prevColors];
                        updatedColors[index] = 'bg-red-500';
                        return updatedColors;
                      });

                      const correctButton = document.getElementById(
                        `${index}-${question.t - 1}`
                      ) as HTMLButtonElement;
                      correctButton.style.backgroundColor = '#4caf50';
                      correctButton.style.color = 'white';
                    }
                  }}
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
}
