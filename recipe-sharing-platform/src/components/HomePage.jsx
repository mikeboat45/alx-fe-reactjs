import { useState, useEffect } from "react";
import recipeData from "../data.json";
import RecipeCard from "./RecipeCard";

export default function HomePage(props) {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    setRecipe(recipeData);
  });

  const myData = recipeData.map((recipeObj) => {
    return (
      <RecipeCard
        key={recipeObj.id}
        image={recipeObj.image}
        title={recipeObj.title}
        summary={recipeObj.summary}
      />
    );
  });

  return (
    <div className="bg-gray-700 hover:bg-gray-400 p-4 text-xl rounded border-black border-1 shadow m-4 grid sm:grid-cols-3 md:grid-cols-2">
      {myData}
    </div>
  );
}
