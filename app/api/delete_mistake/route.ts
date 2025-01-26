import { prisma } from '@/prisma';
import {auth} from '@/auth'
import { NextResponse } from 'next/server';
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const questid = data.id
    const dataz = await prisma.question.delete({
      where:{id:questid},
    })
    console.log(dataz)
    // Відповідь на запит
    return NextResponse.json({ message: 'Data received', dataz});
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}