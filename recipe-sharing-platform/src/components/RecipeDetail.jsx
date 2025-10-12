import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipeData from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find(
      (recipeObj) => recipeObj.id === parseInt(id)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold text-gray-600">Recipe not found!</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {recipe.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{recipe.summary}</p>
        </div>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 sm:h-96 object-cover"
        />
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ingredients Card */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Ingredients
              </h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-800 flex items-start">
                    <span className="mr-2 mt-1 block w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Instructions Card */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Instructions
              </h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="text-gray-800 flex items-start">
                    <span className="mr-3 font-bold text-gray-500">
                      {index + 1}.
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}