import Link from "next/link";
import { Recipes } from "@/data/recipes";

interface RecipePageProps {
  params: Promise<{ id: string }>;
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params;
  const receta = Recipes.find((r) => r.id === id);

  if (!receta) {
    return (
      <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-extrabold text-red-500">
          404 - Receta no encontrada
        </h1>
        <p className="mt-4 text-gray-400">
          Lo sentimos, la receta que buscas no existe.
        </p>
        <Link
          href="/"
          className="mt-8 px-6 py-3 bg-teal-500 text-gray-900 font-semibold rounded-lg hover:bg-teal-600 transition"
        >
          Volver al menú principal
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="container mx-auto">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gray-800 text-teal-400 font-semibold rounded-full border border-gray-700 hover:border-teal-400 transition mb-12"
        >
          &larr; Volver al menú
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-6">
          {receta.title}
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">
            Ingredientes
          </h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            {receta.ingredients.map((ingrediente, index) => (
              <li key={index} className="text-lg">
                {ingrediente}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-200 mb-4">
            Instrucciones
          </h2>
          <ol className="list-decimal list-inside text-gray-400 space-y-2">
            {receta.instructions.map((instruccion, index) => (
              <li key={index} className="text-lg">
                {instruccion}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Recipes.map((r) => ({
    id: r.id,
  }));
}
