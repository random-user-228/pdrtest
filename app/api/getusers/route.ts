import {prisma} from '@/prisma';
import { NextResponse } from 'next/server';

  
export async function GET(){
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
      } catch (error) {
        return NextResponse.json({ error: 'Помилка при отриманні користувачів' });
      }

    }