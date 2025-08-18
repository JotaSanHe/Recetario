// src/components/RecipeCard.tsx

import Link from "next/link";
import { Recetas } from "@/types/recetas";

type RecipeCardProps = {
    receta: Recetas;
};

export default function RecipeCard({ receta }: RecipeCardProps) {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-transparent hover:border-teal-400 transition-all duration-300">
            <Link href={`/recipes/${receta.id}`}>
                <h2 className="text-2xl font-semibold text-teal-400 mb-2">
                    {receta.title}
                </h2>
            </Link>
            <p className="text-gray-400 text-sm">
                Ingredientes principales: {receta.ingredients.slice(0, 3).join(', ')}...
            </p>
        </div>
    );
}