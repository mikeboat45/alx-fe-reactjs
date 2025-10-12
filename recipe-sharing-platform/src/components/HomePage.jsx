import { Link } from "react-router-dom";
import recipeData from "../data.json";
import RecipeCard from "./RecipeCard";

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Recipes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeData.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="block transform hover:scale-105 transition-transform duration-300">
              <RecipeCard
                image={recipe.image}
                title={recipe.title}
                summary={recipe.summary}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
