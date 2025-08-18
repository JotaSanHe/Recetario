// src/components/MainView.tsx

'use client'

import {Recipes} from '@/data/recipes';
import RecipeCard from './RecipeCard';

export default function MainView(){
    return (
        <div className='bg-gray-900 text-white min-h-screen py-10'> 
            <h1 className="font-extrabold text-5xl md:text-6xl text-center text-teal-400 mb-12">
                Mi Recetario
            </h1>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                {Recipes.map((receta) => (
                    <RecipeCard key={receta.id} receta={receta} />
                ))}
            </div>
        </div>
    )
}