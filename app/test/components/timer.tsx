import { useEffect, useState } from "react";
import Alert from "./alert";
export default function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(20);
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((sec) => {
          if (sec === 0) {
            if (minutes === 0) {
              clearInterval(interval); // Очищуємо інтервал, коли хвилини і секунди дорівнюють 0
              return 0; // Повертаємо 0 секунд
            }
            return 59; // Якщо хвилини ще є, повертаємо 59 секунд
          } else {
            return sec - 1; // Зменшуємо секунди на 1
          }
        });
  
        setMinutes((min) => {
          if (seconds === 0 && min > 0) {
            return min - 1; // Зменшуємо хвилини, коли секунди обнулилися
          }
          return min; // Якщо хвилини не закінчилися, повертаємо те ж значення
        });
      }, 1000);
  
      return () => clearInterval(interval); // Очищення інтервалу при розмонтуванні компонента
    }, [seconds, minutes]); // Додаємо minutes до залежностей, щоб правильно слідкувати за змінами
  
    return (
      <div id="timer">
        <p>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
        {minutes === 0 && seconds === 0 ? <Alert name="тест не складено!" description="Ви не вклалися в часові рамки."/> : <></>}
      </div>
    );
  }