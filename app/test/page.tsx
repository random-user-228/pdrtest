'use client';  // Застосування "use client" для використання клієнтських функцій, таких як useEffect

import Image from 'next/image';
import { ReactElement, useEffect, useState } from 'react';
import Alert from './components/alert';
import {prisma} from '@/prisma'
import Timer from './components/timer';




// Опис структури питання та відповіді за допомогою інтерфейсу
interface Question {
  q: string;
  a: string[];
  t: number;
  p?: string; // Зображення може бути відсутнім, тому робимо це поле необов'язковим
}

export default function Questions() {
  // Вказуємо тип для стейту
  const [data, setData] = useState<Question[] | null>(null);
  const [click, setClick] = useState(0)
  const [truea, setTrue] = useState(0)
  const [falsea, setFalse] = useState(0)
  const [indexa, setIndex] = useState(0)

  function clickclick(){
    setClick(click+1)
  }
  function addTrueA(){
    setTrue(truea+1)
  }
  function addFalseA(){
    setFalse(falsea+1)
  }

  // Використання useEffect для отримання даних з API
  useEffect(() => {
    fetch('/api/get_bilet')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  // Якщо дані ще не завантажені, відображається "Loading..."
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
    <div className='flex justify-center items-center border-solid rounded-sm'><Timer/></div>
    <div className='flex md:justify-center lg:justify-center border-solid rounded-sm overflow-auto'>
      <div className='border h-10 w-20 flex justify-center items-center' onClick={() => {
    if(indexa>0){ setIndex(indexa - 1)} 
   }}>&#x2190;</div>
      <div className={`border size-10 min-w-10 flex justify-center items-center ${indexa === 0 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p1' onClick={()=>{setIndex(0)}}>1</div>
      <div className={`border size-10 min-w-10 flex justify-center items-center ${indexa === 1 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p2' onClick={()=>{setIndex(1)}}>2</div>
      <div className={`border size-10 min-w-10 flex justify-center items-center ${indexa === 2 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p3' onClick={()=>{setIndex(2)}}>3</div>
      <div className={`border size-10 min-w-10 flex justify-center items-center ${indexa === 3 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p4' onClick={()=>{setIndex(3)}}>4</div>
      <div className={`border size-10 min-w-10 flex justify-center items-center ${indexa === 4 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p5' onClick={()=>{setIndex(4)}}>5</div>
      <div className={`border size-10 min-w-10 flex justify-center items-center ${indexa === 5 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p6' onClick={()=>{setIndex(5)}}>6</div>
      <div className={`border size-10 min-w-10 flex justify-center items-center ${indexa === 6 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p7' onClick={()=>{setIndex(6)}}>7</div>
      <div className={`border size-10 min-w-10 flex justify-center items-center ${indexa === 7 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p8' onClick={()=>{setIndex(7)}}>8</div>
      <div className={`border size-10 min-w-10 flex justify-center items-center ${indexa === 8 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p9' onClick={()=>{setIndex(8)}}>9</div>
      <div className={`border size-10 min-w-10 flex justify-center items-center ${indexa === 9 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p10' onClick={()=>{setIndex(9)}}>10</div>
      <div className={`border size-10 min-w-10 flex justify-center items-center ${indexa === 10 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p11' onClick={()=>{setIndex(10)}}>11</div>
      <div className={`border size-10  min-w-10 flex justify-center items-center ${indexa === 11 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p12' onClick={()=>{setIndex(11)}}>12</div>
      <div className={`border size-10 min-w-10 flex justify-center items-center ${indexa === 12 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p13' onClick={()=>{setIndex(12)}}>13</div>
      <div className={`border size-10 min-w-10 flex justify-center items-center ${indexa === 13 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p14' onClick={()=>{setIndex(13)}}>14</div>
      <div className={`border size-10 min-w-10 flex justify-center items-center ${indexa === 14 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p15' onClick={()=>{setIndex(14)}}>15</div>
      <div className={`border size-10 min-w-10 flex justify-center items-center ${indexa === 15 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p16' onClick={()=>{setIndex(15)}}>16</div>
      <div className={`border size-10 min-w-10 flex justify-center items-center ${indexa === 16 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p17' onClick={()=>{setIndex(16)}}>17</div>
      <div className={`border size-10 min-w-10 flex justify-center items-center ${indexa === 17 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p18' onClick={()=>{setIndex(17)}}>18</div>
      <div className={`border size-10 min-w-10 flex justify-center items-center ${indexa === 18 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p19' onClick={()=>{setIndex(18)}}>19</div>
      <div className={`border size-10 min-w-10 flex justify-center items-center ${indexa === 19 ? ' shadow-gray-600 shadow-inner' : ''}`} id='p20' onClick={()=>{setIndex(19)}}>20</div>
      <div className='border h-10 w-20 flex justify-center items-center' onClick={() => {if(indexa<19){ setIndex(indexa + 1)}}}>&#x2192;</div>
    </div>

    <div className='flex flex-col items-center justify-center'>
      {data.map((question: Question, index: number): ReactElement => (
        <div className={`p-6 m-5 w-96 mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4 text-center ${
          index == indexa ? 'block' : 'hidden'
        }`}
        key={index}>
        
           {question.p ? (
            <div>
              {/* Використання Next.js Image для оптимізації зображень */}
              <img
                src={question.p} // Шлях до зображення
                alt={`Photo for question ${index + 1}`}
              />
            </div>
          ) : <></>}
          <div className="font-bold">{question.q}</div>
          <ul>
            {question.a.map((answer: string, i: number): ReactElement => (
              <button
                key={i}
                className={`a${index} border-b-2 shadow-sm rounded-md p-2 w-80`} 
                id={`${index}-${i}`} // Унікальний клас для кожної кнопки
                onClick={() => {
                  // Всі кнопки з однаковим класом (відповіді на питання)
                  const buttons = document.querySelectorAll(`.a${index}`) as NodeListOf<HTMLButtonElement>;
                  clickclick()
                  // Відключаємо всі кнопки після вибору
                  buttons.forEach(button => {
                    button.disabled = true;
                  });
                  const paginatid = document.getElementById(`p${index+1}`) as HTMLDivElement
                  const clickedButton = document.getElementById(
                    `${index}-${i}`
                  ) as HTMLButtonElement;

                  // Якщо відповідь правильна
                  if (i + 1 === question.t) {
                    clickedButton.style.backgroundColor = '#4caf50';
                    clickedButton.style.color = 'white';
                    paginatid.style.backgroundColor = '#4caf50';
                    paginatid.style.color = 'white';
                    addTrueA()

                  } else {
                    // Якщо відповідь неправильна
                    clickedButton.style.backgroundColor = '#f44336';
                    clickedButton.style.color = 'white';
                    paginatid.style.backgroundColor = '#f44336';
                    paginatid.style.color = 'white';
                    addFalseA()
                    const postData = async (url = '', data = {}) => {
                      try {
                        const response = await fetch(url, {
                          method: 'POST', // метод POST
                          headers: {
                            'Content-Type': 'application/json', // вказуємо формат даних
                          },
                          body: JSON.stringify(data), // конвертуємо дані в JSON
                        });
                    
                        // Перевіряємо, чи успішний запит
                        if (!response.ok) {
                          throw new Error('Помилка запиту');
                        }
                    
                        // Парсимо відповідь у форматі JSON
                        const result = await response.json();
                        console.log('Успішно:', result);
                        return result;
                      } catch (error) {
                        console.error('Помилка:', error);
                      }
                    };
                    
                    // Виклик функції, де `url` – адреса для запиту, а `data` – дані для надсилання
                    postData('/api/mistakes', question);

                    // Показуємо правильну відповідь
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
    {falsea >= 3 ? <Alert name="Тест нескладено!" description={`Нажаль ви допустили більше 2 помилок. Правильних відповідей: ${truea}`}/> : click == 20 ? <Alert name="Тест складено!" description={`Правильних відповідей: ${truea}. Неправильних: ${falsea}.`}/> : <></> }
    {click == 20 ? <Alert name="Тест складено!" description={`Правильних відповідей: ${truea}. Неправильних: ${falsea}.`}/> : <></>}
    </>
  );
}
