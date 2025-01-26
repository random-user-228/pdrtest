import { NextResponse } from 'next/server';
import { prisma } from '@/prisma';

// Ця функція обробляє POST-запити
export async function POST(req: Request) {
  try {
    // Отримання тіла запиту
    const body = await req.json();
    const { name, email } = body;

    // Створення користувача в базі даних
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    // Повернення успішної відповіді
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: 'Помилка при створенні користувача' }, { status: 500 });
  }
}

