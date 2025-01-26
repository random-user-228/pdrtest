import { NextResponse } from 'next/server';
import { getData } from '@/db/data';
import { getSecureData } from '@/db/data';
import { getpdrdata } from '@/db/data';
import {auth} from '@/auth'
import { prisma } from '@/prisma';
// Функція для отримання випадкового цілого числа
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
interface Question {
  q: string;
  a: string[];
  t: number;
  p?: string; // Зображення може бути відсутнім, тому робимо це поле необов'язковим
}


export async function GET(req:Request) {
  const session = await auth()
  if(!session?.user?.email){return NextResponse.json("ERROR")}
  const userdb = await prisma.user.findUnique({
    where:{
      email:session.user.email
    }
  })
  async function fillListA() { //20 для а категорії 10 пдр 4 безпека водіння 4 будова та експлуатація 2 медицина
    const data = await getData()
  const sec = await getSecureData()
  const a_list_pdr: Question[] = []
  const a_list_secure:Question[] = []
  const a_list_dop:Question[] = []
  const a_list_med:Question[] = []
  const a_pdr = getpdrdata()
  const a_secure = [...sec,...data.fourty_two,...data.fourty_three]
  const a_dop = [...data.fourty,...data.fourty_one]
  const a_med = [...data.thirty_seven]
    for (let i = 0; i < 10; i++) {
        const a_pd = await a_pdr; // Асинхронно отримуємо a_pdr перед циклом або всередині циклу
        const k = getRandomInt(0, a_pd.length);
        a_list_pdr.push(a_pd[k]);

        
    }
    for(let i = 0; i < 4;i++){
      let k = getRandomInt(0,a_secure.length)
      a_list_secure.push(a_secure[k])
    }
    for(let i = 0; i < 4;i++){
      let k = getRandomInt(0,a_dop.length)
      a_list_dop.push(a_dop[k])
    }
    for(let i = 0; i < 2;i++){
      let k = getRandomInt(0,a_med.length)
      a_list_med.push(a_med[k])

    }
    const a_list_all = [...a_list_pdr,...a_list_secure,...a_list_dop,...a_list_med]
    return a_list_all
}

async function fillListB() {
  const data = await getData()
const sec = await getSecureData()
const b_list_pdr: Question[] = []
const b_list_secure:Question[] = []
const b_list_dop:Question[] = []
const b_list_med:Question[] = []
const b_pdr = getpdrdata()
const b_secure = [...sec,...data.fourty_six,...data.fourty_seven]
const b_dop = [...data.fourty_four,...data.fourty_five]
const b_med = [...data.thirty_seven]
  for (let i = 0; i < 10; i++) {
      const b_pd = await b_pdr; // Асинхронно отримуємо a_pdr перед циклом або всередині циклу
      const k = getRandomInt(0, b_pd.length);
      b_list_pdr.push(b_pd[k]);

      
  }
  for(let i = 0; i < 4;i++){
    let k = getRandomInt(0,b_secure.length)
    b_list_secure.push(b_secure[k])
  }
  for(let i = 0; i < 4;i++){
    let k = getRandomInt(0,b_dop.length)
    b_list_dop.push(b_dop[k])
  }
  for(let i = 0; i < 2;i++){
    let k = getRandomInt(0,b_med.length)
    b_list_med.push(b_med[k])

  }
  const a_list_all = [...b_list_pdr,...b_list_secure,...b_list_dop,...b_list_med]
  return a_list_all
}

async function fillListC() {
  const data = await getData()
const sec = await getSecureData()
const c_list_pdr: Question[] = []
const c_list_secure:Question[] = []
const c_list_dop:Question[] = []
const c_list_med:Question[] = []
const c_pdr = getpdrdata()
const c_secure = [...sec,...data.fivety,...data.fivety_one]
const c_dop = [...data.fourty_eight,...data.fourty_nine]
const c_med = [...data.thirty_seven]
  for (let i = 0; i < 10; i++) {
      const c_pd = await c_pdr; // Асинхронно отримуємо a_pdr перед циклом або всередині циклу
      const k = getRandomInt(0, c_pd.length);
      c_list_pdr.push(c_pd[k]);

      
  }
  for(let i = 0; i < 4;i++){
    let k = getRandomInt(0,c_secure.length)
    c_list_secure.push(c_secure[k])
  }
  for(let i = 0; i < 4;i++){
    let k = getRandomInt(0,c_dop.length)
    c_list_dop.push(c_dop[k])
  }
  for(let i = 0; i < 2;i++){
    let k = getRandomInt(0,c_med.length)
    c_list_med.push(c_med[k])

  }
  const c_list_all = [...c_list_pdr,...c_list_secure,...c_list_dop,...c_list_med]
  return c_list_all
}

async function fillListD() {
  const data = await getData()
const sec = await getSecureData()
const d_list_pdr: Question[] = []
const d_list_secure:Question[] = []
const d_list_dop:Question[] = []
const d_list_med:Question[] = []
const d_pdr = getpdrdata()
const d_secure = [...sec,...data.fivety_four,...data.fivety_five]
const d_dop = [...data.fivety_two,...data.fivety_three]
const d_med = [...data.thirty_seven]
  for (let i = 0; i < 10; i++) {
      const d_pd = await d_pdr; // Асинхронно отримуємо a_pdr перед циклом або всередині циклу
      const k = getRandomInt(0, d_pd.length);
      d_list_pdr.push(d_pd[k]);

      
  }
  for(let i = 0; i < 4;i++){
    let k = getRandomInt(0,d_secure.length)
    d_list_secure.push(d_secure[k])
  }
  for(let i = 0; i < 4;i++){
    let k = getRandomInt(0,d_dop.length)
    d_list_dop.push(d_dop[k])
  }
  for(let i = 0; i < 2;i++){
    let k = getRandomInt(0,d_med.length)
    d_list_med.push(d_med[k])

  }
  const d_list_all = [...d_list_pdr,...d_list_secure,...d_list_dop,...d_list_med]
  return d_list_all
}

async function fillListE() {
  const data = await getData()
const sec = await getSecureData()
const e_list_pdr: Question[] = []
const e_list_secure:Question[] = []
const e_list_dop:Question[] = []
const e_list_med:Question[] = []
const e_pdr = getpdrdata()
const e_secure = [...sec,...data.fivety_eight,...data.fivety_nine]
const e_dop = [...data.fivety_six,...data.fivety_seven]
const e_med = [...data.thirty_seven]
  for (let i = 0; i < 10; i++) {
      const e_pd = await e_pdr; // Асинхронно отримуємо a_pdr перед циклом або всередині циклу
      const k = getRandomInt(0, e_pd.length);
      e_list_pdr.push(e_pd[k]);

      
  }
  for(let i = 0; i < 4;i++){
    let k = getRandomInt(0,e_secure.length)
    e_list_secure.push(e_secure[k])
  }
  for(let i = 0; i < 4;i++){
    let k = getRandomInt(0,e_dop.length)
    e_list_dop.push(e_dop[k])
  }
  for(let i = 0; i < 2;i++){
    let k = getRandomInt(0,e_med.length)
    e_list_med.push(e_med[k])

  }
  const e_list_all = [...e_list_pdr,...e_list_secure,...e_list_dop,...e_list_med]
  return e_list_all
}

async function fillListT() {
  const data = await getData()
const sec = await getSecureData()
const t_list_pdr: Question[] = []
const t_list_secure:Question[] = []
const t_list_dop:Question[] = []
const t_list_med:Question[] = []
const t_pdr = getpdrdata()
const t_secure = [...sec,...data.sixty_two,...data.sixty_three]
const t_dop = [...data.sixty,...data.sixty_one]
const t_med = [...data.thirty_seven]
  for (let i = 0; i < 10; i++) {
      const t_pd = await t_pdr; // Асинхронно отримуємо a_pdr перед циклом або всередині циклу
      const k = getRandomInt(0, t_pd.length);
      t_list_pdr.push(t_pd[k]);

      
  }
  for(let i = 0; i < 4;i++){
    let k = getRandomInt(0,t_secure.length)
    t_list_secure.push(t_secure[k])
  }
  for(let i = 0; i < 4;i++){
    let k = getRandomInt(0,t_dop.length)
    t_list_dop.push(t_dop[k])
  }
  for(let i = 0; i < 2;i++){
    let k = getRandomInt(0,t_med.length)
    t_list_med.push(t_med[k])

  }
  const t_list_all = [...t_list_pdr,...t_list_secure,...t_list_dop,...t_list_med]
  return t_list_all
}
if (userdb){
  if(userdb.category=='A'){
    const datak = await fillListA()
    return NextResponse.json(datak)
  }else if(userdb.category=='B'){
    const datak = await fillListB()
    return NextResponse.json(datak)
  }else if(userdb.category=='C'){
    const datak = await fillListC()
    return NextResponse.json(datak)
  }else if(userdb.category=='D'){
    const datak = await fillListD()
    return NextResponse.json(datak)
  }else if(userdb.category=='E'){
    const datak = await fillListE()
    return NextResponse.json(datak)
  }else if(userdb.category=='T'){
    const datak = await fillListT()
    return NextResponse.json(datak)
  }
}
  }
  