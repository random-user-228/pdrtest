
import path from 'path';
import { promises as fs } from 'fs';
export interface Question {
  q: string;
  a: string[];
  t: number;
  p?: string; // Зображення може бути відсутнім, тому робимо це поле необов'язковим
}

// Типізація даних, які будуть читатися з JSON файлу
export interface Data {
  one: Question[];
  two: Question[];
  three: Question[];
  four: Question[];
  five: Question[];
  six: Question[];
  seven: Question[];
  eight_one: Question[];
  eight_two: Question[];
  nine: Question[];
  ten: Question[];
  eleven: Question[];
  twelve: Question[];
  threeteen: Question[];
  fourteen: Question[];
  fiveteen: Question[];
  sixteen_one: Question[];
  sixteen_two: Question[];
  seventeen: Question[];
  eighteen: Question[];
  nineteen: Question[];
  twenty: Question[];
  twenty_one: Question[];
  twenty_two: Question[];
  twenty_three: Question[];
  twenty_four: Question[];
  twenty_five: Question[];
  twenty_six: Question[];
  twenty_seven: Question[];
  twenty_eight: Question[];
  twenty_nine: Question[];
  thirty: Question[];
  thirty_one: Question[];
  thirty_two: Question[];
  thirty_three: Question[];
  thirty_four: Question[];
  thirty_five: Question[];
  thirty_six: Question[];
  thirty_seven: Question[];
  thirty_eight: Question[];
  thirty_nine: Question[];
  fourty: Question[];
  fourty_one: Question[];
  fourty_two: Question[];
  fourty_three: Question[];
  fourty_four: Question[];
  fourty_five: Question[];
  fourty_six: Question[];
  fourty_seven: Question[];
  fourty_eight: Question[];
  fourty_nine: Question[];
  fivety: Question[];
  fivety_one: Question[];
  fivety_two: Question[];
  fivety_three: Question[];
  fivety_four: Question[];
  fivety_five: Question[];
  fivety_six: Question[];
  fivety_seven: Question[];
  fivety_eight: Question[];
  fivety_nine: Question[];
  sixty: Question[];
  sixty_one: Question[];
  sixty_two: Question[];
  sixty_three: Question[];
}

const jsonDirectory = path.join(process.cwd(), 'db');
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Функція для читання JSON файлу
export async function getData(): Promise<Data> {
  const filePath = path.join(jsonDirectory, 'data.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const data: Data = JSON.parse(fileContents);
  
  return data;
}

// Функція для отримання всіх даних
export async function getpdrdata() {
  const data = await getData();
  const pdrdata = [
    ...data.one, ...data.two, ...data.three, ...data.four, ...data.five,
        ...data.six, ...data.seven, ...data.eight_one, ...data.eight_two, ...data.nine,
        ...data.ten, ...data.eleven, ...data.twelve, ...data.threeteen, ...data.fourteen,
        ...data.fiveteen, ...data.sixteen_one, ...data.sixteen_two, ...data.seventeen, ...data.eighteen,
        ...data.nineteen, ...data.twenty, ...data.twenty_one, ...data.twenty_two, ...data.twenty_three,
        ...data.twenty_four, ...data.twenty_five, ...data.twenty_six, ...data.twenty_seven, ...data.twenty_eight,
        ...data.twenty_nine, ...data.thirty, ...data.thirty_one, ...data.thirty_two, ...data.thirty_three,
        ...data.thirty_four,
  ]
  return pdrdata
}

async function getsecuredata() {
  const data = await getData();
  const pdrdata = [
    ...data.thirty_five, ...data.thirty_six, ...data.thirty_eight,
    ...data.thirty_nine,
  ]
  return pdrdata
}
  async function getadddata() {
    const data = await getData();
    const pdrdata = [
      ...data.fourty, ...data.fourty_one, ...data.fourty_three,
      ...data.fourty_two,
    ]
    return pdrdata

  }




export async function getAllData() {
  const data = await getData();
  const all_list = [
        ...data.one, ...data.two, ...data.three, ...data.four, ...data.five,
        ...data.six, ...data.seven, ...data.eight_one, ...data.eight_two, ...data.nine,
        ...data.ten, ...data.eleven, ...data.twelve, ...data.threeteen, ...data.fourteen,
        ...data.fiveteen, ...data.sixteen_one, ...data.sixteen_two, ...data.seventeen, ...data.eighteen,
        ...data.nineteen, ...data.twenty, ...data.twenty_one, ...data.twenty_two, ...data.twenty_three,
        ...data.twenty_four, ...data.twenty_five, ...data.twenty_six, ...data.twenty_seven, ...data.twenty_eight,
        ...data.twenty_nine, ...data.thirty, ...data.thirty_one, ...data.thirty_two, ...data.thirty_three,
        ...data.thirty_four, ...data.thirty_five, ...data.thirty_six, ...data.thirty_seven, ...data.thirty_eight,
        ...data.thirty_nine, ...data.fourty, ...data.fourty_one, ...data.fourty_two, ...data.fourty_three,
        ...data.fourty_four, ...data.fourty_five, ...data.fourty_six, ...data.fourty_seven, ...data.fourty_eight,
        ...data.fourty_nine, ...data.fivety, ...data.fivety_one, ...data.fivety_two, ...data.fivety_three,
        ...data.fivety_four, ...data.fivety_five, ...data.fivety_six, ...data.fivety_seven, ...data.fivety_eight,
        ...data.fivety_nine, ...data.sixty, ...data.sixty_one, ...data.sixty_two, ...data.sixty_three,
      ]
      return data
}

export async function getcatA() {
  const data = await getData();

  return {
    all_data_question: {
      all: [
        ...data.one, ...data.two, ...data.three, ...data.four, ...data.five,
        ...data.six, ...data.seven, ...data.eight_one, ...data.eight_two, ...data.nine,
        ...data.ten, ...data.eleven, ...data.twelve, ...data.threeteen, ...data.fourteen,
        ...data.fiveteen, ...data.sixteen_one, ...data.sixteen_two, ...data.seventeen, ...data.eighteen,
        ...data.nineteen, ...data.twenty, ...data.twenty_one, ...data.twenty_two, ...data.twenty_three,
        ...data.twenty_four, ...data.twenty_five, ...data.twenty_six, ...data.twenty_seven, ...data.twenty_eight,
        ...data.twenty_nine, ...data.thirty, ...data.thirty_one, ...data.thirty_two, ...data.thirty_three,
        ...data.thirty_four, ...data.thirty_five, ...data.thirty_six, ...data.thirty_seven, ...data.thirty_eight,
        ...data.thirty_nine, ...data.fourty, ...data.fourty_one, ...data.fourty_two, ...data.fourty_three,
      ]
      },
  };
  
}
export async function getcatB() {
  const data = await getData();

  return {
    all_data_question: {
      all: [
        ...data.one, ...data.two, ...data.three, ...data.four, ...data.five,
        ...data.six, ...data.seven, ...data.eight_one, ...data.eight_two, ...data.nine,
        ...data.ten, ...data.eleven, ...data.twelve, ...data.threeteen, ...data.fourteen,
        ...data.fiveteen, ...data.sixteen_one, ...data.sixteen_two, ...data.seventeen, ...data.eighteen,
        ...data.nineteen, ...data.twenty, ...data.twenty_one, ...data.twenty_two, ...data.twenty_three,
        ...data.twenty_four, ...data.twenty_five, ...data.twenty_six, ...data.twenty_seven, ...data.twenty_eight,
        ...data.twenty_nine, ...data.thirty, ...data.thirty_one, ...data.thirty_two, ...data.thirty_three,
        ...data.thirty_four, ...data.thirty_five, ...data.thirty_six, ...data.thirty_seven, ...data.thirty_eight,
        ...data.thirty_nine,
        ...data.fourty_four, ...data.fourty_five, ...data.fourty_six, ...data.fourty_seven,
      ],
    },
  };
}
export async function getPDRData() {
  const data = await getData();

  return {
    all_data_question: {
      all: [
        ...data.one, ...data.two, ...data.three, ...data.four, ...data.five,
        ...data.six, ...data.seven, ...data.eight_one, ...data.eight_two, ...data.nine,
        ...data.ten, ...data.eleven, ...data.twelve, ...data.threeteen, ...data.fourteen,
        ...data.fiveteen, ...data.sixteen_one, ...data.sixteen_two, ...data.seventeen, ...data.eighteen,
        ...data.nineteen, ...data.twenty, ...data.twenty_one, ...data.twenty_two, ...data.twenty_three,
        ...data.twenty_four, ...data.twenty_five, ...data.twenty_six, ...data.twenty_seven, ...data.twenty_eight,
        ...data.twenty_nine, ...data.thirty, ...data.thirty_one, ...data.thirty_two, ...data.thirty_three,
        ...data.thirty_four,
      ],
    },
  };
}
export async function getSecureData() {
  const data = await getData();
  const date = [
    ...data.thirty_five, ...data.thirty_six, ...data.thirty_seven, ...data.thirty_eight,
    ...data.thirty_nine,
  ]
  return date
}
export async function getTemu(){
  const temu = [
    "1. ЗАГАЛЬНІ ПОЛОЖЕННЯ",
    "2. ОБОВЯЗКИ І ПРАВА ВОДІЇВ МЕХАНІЧНИХ ТРАНСПОРТНИХ ЗАСОБІВ",
    "3. РУХ ТРАНСПОРТНИХ ЗАСОБІВ ІЗ СПЕЦІАЛЬНИМИ СИГНАЛАМИ",
    "4. ОБОВ'ЯЗКИ І ПРАВА ПІШОХОДІВ",
    "5. ОБОВ'ЯЗКИ І ПРАВА ПАСАЖИРІВ",
    "6. ВИМОГИ ДО ВЕЛОСИПЕДИСТІВ",
    "7. ВИМОГИ ДО ОСІБ, ЯКІ КЕРУЮТЬ ГУЖОВИМ ТРАНСПОРТОМ,І ПОГОНИЧІВ ТВАРИН",
    "8.1. РЕГУЛЮВАННЯ ДОРОЖНЬОГО РУХУ (РЕГУЛЬОВАНІ ПЕРЕХРЕСТЯ)",
    "8.2. РЕГУЛЮВАННЯ ДОРОЖНЬОГО РУХУ (НЕРЕГУЛЬОВАНІ ПЕРЕХРЕСТЯ)",
    "9. ПОПЕРЕДЖУВАЛЬНІ СИГНАЛИ",
    "10. ПОЧАТОК РУХУ ТА ЗМІНА ЙОГО НАПРЯМКУ",
    "11. РОЗТАШУВАННЯ ТРАНСПОРТНИХ ЗАСОБІВ НА ДОРОЗІ",
    "12. ШВИДКІСТЬ РУХУ",
    "13. ДИСТАНЦІЯ, ІНТЕРВАЛ, ЗУСТРІЧНИЙ РОЗ'ЇЗД",
    "14. ОБГІН",
    "15. ЗУПИНКА І СТОЯНКА",
    "16.1. ПРОЇЗД ПЕРЕХРЕСТЬ (РЕГУЛЬОВАНІ ПЕРЕХРЕСТЯ)",
    "16.2. ПРОЇЗД ПЕРЕХРЕСТЬ (НЕРЕГУЛЬОВАНІ ПЕРЕХРЕСТЯ)",
    "17. ПЕРЕВАГИ МАРШРУТНИХ ТРАНСПОРТНИХ ЗАСОБІВ",
    "18. ПРОЇЗД ПІШОХІДНИХ ПЕРЕХОДІВ І ЗУПИНОК ТРАНСПОРТНИХ ЗАСОБІВ",
    "19. КОРИСТУВАННЯ ЗОВНІШНІМИ СВІТЛОВИМИ ПРИЛАДАМИ",
    "20. РУХ ЧЕРЕЗ ЗАЛІЗНИЧНІ ПЕРЕЇЗДИ",
    "21. ПЕРЕВЕЗЕННЯ ПАСАЖИРІВ",
    "22. ПЕРЕВЕЗЕННЯ ВАНТАЖУ",
    "23. БУКСИРУВАННЯ ТА ЕКСПЛУАТАЦІЯ ТРАНСПОРТНИХ СОСТАВІВ",
    "24. НАВЧАЛЬНА ЇЗДА",
    "25. РУХ ТРАНСПОРТНИХ ЗАСОБІВ У КОЛОНАХ",
    "26. РУХ У ЖИТЛОВІЙ ТА ПІШОХІДНІЙ ЗОНІ",
    "27. РУХ ПО АВТОМАГІСТРАЛЯХ",
    "28. РУХ ПО ГІРСЬКИХ ДОРОГАХ І НА КРУТИХ СПУСКАХ",
    "29. МІЖНАРОДНИЙ РУХ",
    "30. НОМЕРНІ, РОЗПІЗНАВАЛЬНІ ЗНАКИ,НАПИСИ І ПОЗНАЧЕННЯ",
    "31. ТЕХНІЧНИЙ СТАН ТРАНСПОРТНИХ ЗАСОБІВ ТА ЇХ ОБЛАДНАННЯ",
    "32. ОКРЕМІ ПИТАННЯ ДОРОЖНЬОГО РУХУ, ЩО ПОТРЕБУЮТЬ УЗГОДЖЕННЯ",
    "33. ДОРОЖНІ ЗНАКИ",
    "34. ДОРОЖНЯ РОЗМІТКА",
    "35. ОСНОВИ БЕЗПЕЧНОГО ВОДІННЯ",
    "36. ОСНОВИ ПРАВА В ОБЛАСТІ ДОРОЖНЬОГО РУХУ",
    "37. НАДАННЯ ДОМЕДИЧНОЇ ДОПОМОГИ",
    "38. ЕТИКА ВОДІННЯ, КУЛЬТУРА ТА ВІДПОЧИНОК ВОДІЯ",
    "39. ЄВРОПРОТОКОЛ",
    "40. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ А1, А (ЗАГАЛЬНІ)",
    "41. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ А1, А (БУДОВА І ТЕРМІНИ)",
    "42. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ А1, А (ЮРИДИЧНА ВІДПОВІДАЛЬНІСТЬ)",
    "43. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ А1, А (БЕЗПЕКА)",
    "44. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ В1, В (ЗАГАЛЬНІ)",
    "45. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ В1, В (БУДОВА І ТЕРМІНИ)",
    "46. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ В1, В (ЮРИДИЧНА ВІДПОВІДАЛЬНІСТЬ)",
    "47. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ В1, В (БЕЗПЕКА)",
    "48. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ C1,C (ЗАГАЛЬНІ)",
    "49. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ C1,C (БУДОВА І ТЕРМІНИ)",
    "50. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ C1,C (ЮРИДИЧНА ВІДПОВІДАЛЬНІСТЬ)",
    "51. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ C1,C (БЕЗПЕКА)",
    "52. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ D1, D (ЗАГАЛЬНІ)",
    "53. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ D1, D (БУДОВА І ТЕРМІНИ)",
    "54. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ D1, D (ЮРИДИЧНА ВІДПОВІДАЛЬНІСТЬ)",
    "55. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ D1, D (БЕЗПЕКА)",
    "56. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ BE, C1E, CE, D1E, DE (ЗАГАЛЬНІ)",
    "57. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ BE, C1E, CE, D1E, DE (БУДОВА И ТЕРМІНИ)",
    "58. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ BE, C1E, CE, D1E, DE (ЮРИДИЧНА ВІДПОВІЛЬНІСТЬ)",
    "59. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЙ BE, C1E, CE, D1E, DE (БЕЗПЕКА)",
    "60. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЇ T (ЗАГАЛЬНІ)",
    "61. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЇ Т (БУДОВА І ТЕРМІНИ)",
    "62. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЇ Т (ЮРИДИЧНА ВІДПОВІЛЬНІСТЬ)",
    "63. ДОДАТКОВІ ПИТАННЯ ЩОДО КАТЕГОРІЇ Т (БЕЗПЕКА)"
  ]
  return temu
}