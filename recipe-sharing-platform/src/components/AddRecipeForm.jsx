import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required.";
    if (!formData.ingredients) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (formData.ingredients.split('\n').filter(i => i.trim() !== '').length < 2) {
      newErrors.ingredients =
        "Please list at least two ingredients, each on a new line.";
    }
    if (!formData.steps) newErrors.steps = "Preparation steps are required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // In a real app, you'd send this to a server.
      // For now, we'll log it and simulate success.
      const newRecipe = {
        id: Date.now(), // Simple unique ID
        title: formData.title,
        summary: "A newly added recipe.", // Default summary
        image: "https://placehold.co/150", // Default image
        ingredients: formData.ingredients.split('\n').filter(i => i.trim() !== ''),
        instructions: formData.steps.split('\n').filter(i => i.trim() !== ''),
      };

      console.log("New Recipe Submitted:", newRecipe);
      alert("Recipe submitted successfully! (Check the console for the data). The recipe will not be saved permanently in this demo.");
      
      // Redirect to home page after successful submission
      navigate("/");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add a New Recipe</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">Ingredients (one per line)</label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows="5"
              className={`w-full px-3 py-2 border rounded-lg ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
            ></textarea>
            {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">Preparation Steps (one per line)</label>
            <textarea
              id="steps"
              name="steps"
              value={formData.steps}
              onChange={handleChange}
              rows="8"
              className={`w-full px-3 py-2 border rounded-lg ${errors.steps ? 'border-red-500' : 'border-gray-300'}`}
            ></textarea>
            {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
          </div>

          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-transform duration-300">
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}
