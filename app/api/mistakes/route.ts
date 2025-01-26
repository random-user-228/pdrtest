import { prisma } from '@/prisma';
import {auth} from '@/auth'
import { NextResponse } from 'next/server';
interface Question {
  q: string;
  a: string[];
  t: number;
  p?: string; // Зображення може бути відсутнім, тому робимо це поле необов'язковим
}
export async function POST(request: Request) {
  const session = await auth()
  if(!session?.user?.email){return NextResponse.json("ERROR")}
  const userdb = await prisma.user.findUnique({
    where:{
      email:session.user.email
    }
  })
  try {
    const data = await request.json();
    const obj:Question = data
    // Отримання даних з POST запиту
    await prisma.question.create({
      data: {
        q: obj.q,
        a: obj.a,
        t: obj.t,
        p: obj.p,
        user: { connect: { id: userdb?.id } },
      },
    });
    // Виконання якихось дій з даними
    const dataz = await prisma.question.findMany({
      where:{userId:userdb?.id},
      select:{id:true,q:true,a:true,t:true,p:true}
    })
    console.log(dataz)
    // Відповідь на запит
    return NextResponse.json({ message: 'Data received successfully', dataz});
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}