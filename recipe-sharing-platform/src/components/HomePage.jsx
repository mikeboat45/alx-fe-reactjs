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

  return <div>{myData}</div>;
}
