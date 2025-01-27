"use client";
import { MouseEventHandler, useState } from 'react';

export default function Profile() {
    const [userCategory, setUserCategory] = useState<string | null>();

    const updateUserCategory = async (newCategory: string) => {
        const response = await fetch('/api/profile/updateCategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ category: newCategory }),
        });

        if (response.ok) {
            setUserCategory(newCategory); // Оновлюємо локальний стан категорії
        } else {
            console.error('Failed to update category');
        }
    };

    const handleCategoryChange: MouseEventHandler<HTMLButtonElement> = async (event) => {
        const newCategory = (event.target as HTMLButtonElement).value;
        await updateUserCategory(newCategory);
    };

    return (
        <>
            <h2>Вітаємо, користувач</h2>
            <h3>Виберіть категорію</h3>
            <div>
                <button value="A" onClick={handleCategoryChange}>A,A1</button>
                <button value="B" onClick={handleCategoryChange}>B,B1</button>
                <button value="C" onClick={handleCategoryChange}>C,C1</button>
                <button value="D" onClick={handleCategoryChange}>D,D1</button>
                <button value="E" onClick={handleCategoryChange}>E</button>
                <button value="T" onClick={handleCategoryChange}>T</button>
            </div>
            {userCategory && <p>Ви вибрали категорію: {userCategory}</p>}
        </>
    );
}
