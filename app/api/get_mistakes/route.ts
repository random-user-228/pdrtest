import {auth} from '@/auth'
import { prisma } from '@/prisma';
import { DynamicModelExtensionFnResultNull } from '@prisma/client/runtime/react-native.js';
import { NextResponse } from 'next/server';
interface Question {
    id: number;
    q: string;
    a: string[];
    t: number;
    p?: string|null;
  }
export async function GET(req:Request) {
  const session = await auth()
  if(!session?.user?.email){return NextResponse.json("ERROR")}
  const userdb = await prisma.user.findUnique({
    where:{
      email:session.user.email
    }
  })
  const mist = await prisma.question.findMany({
    where:{userId:userdb?.id},
    select:{id:true,q:true,a:true,t:true,p:true}
  }
  )
  console.log(mist)
  return NextResponse.json(mist)
}
