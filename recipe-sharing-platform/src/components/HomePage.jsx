import { Link } from "react-router-dom";
import recipeData from "../data.json";
import RecipeCard from "./RecipeCard";

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
                <div className="flex justify-center items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 text-center">Our Recipes</h1>
          <Link to="/add-recipe" className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Recipe
          </Link>
        </div>
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
