// app/api/profile/updateCategory/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/prisma';
import { auth } from '@/auth';

export async function POST(request: Request) {
    const { category } = await request.json();
    const session = await auth();

    if (!session?.user?.email) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await prisma.user.update({
        where: { email: session.user.email },
        data: { category },
    });

    return NextResponse.json({ message: 'Category updated' });
}
