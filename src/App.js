// Import global styles
import './App.css';

// Import required components
import Header from './components/Header';
import IngredientsList from './components/IngredientsList';
import RecipeGenerator from './components/RecipeGenerator';
import RecipeRecommendation from './components/RecipeRecommendation';

// Import API service for fetching recipes
import { getRecipeFromChefClaude } from "./claudeService";

// Import React for component and hooks
import React from 'react';

function App() {

  // State: Stores the list of ingredients input by the user
  const [ingredients, setIngredients] = React.useState([]);

  // State: Stores the recipe result returned by the recipe generator
  const [recipeResult, setRecipeResult] = React.useState("");

  // Ref: Used to scroll to the recipe section when it's generated
  const recipeSection = React.useRef(null);

  // Function: Handles ingredient submission from the Header component form
  function getIngredient(event) {

    // Prevent page reload on form submission
    event.preventDefault();

    // Create a FormData object
    const formData = new FormData(event.target);

    // Get the value of "ingredient" input
    const ingredient = formData.get("ingredient");

    // Update the ingredient list state with the new ingredient, if the ingredient isn't empty
    ingredient.length !== 0 &&
      setIngredients(prevIngredients => [...prevIngredients, ingredient]);

    // Reset the form input after submission
    event.target.reset();
  }

  // Function: Removes an ingredient from the list by index
  function removeIngredient(indexToRemove) {
    setIngredients(prevIngredients =>
      prevIngredients.filter((_, index) => index !== indexToRemove)
    );
  }

  // Reset recipe result if ingredients fall below minimum (<= 2)
  if (ingredients.length <= 2 && recipeResult !== "") {
    setRecipeResult("");
  }

  // Effect: Scrolls smoothly to the recipe section when a new recipe is generated
  React.useEffect(() => {
    if (recipeResult !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipeResult]);

  // Function: Renders the list of IngredientsList components
  function getIngredients() {
    return ingredients.map((ingredient, index) => (
      <IngredientsList
        ref={recipeSection}
        key={index}
        ingredientName={ingredient}
        removeIngredient={() => removeIngredient(index)}
      />
    ));
  }

  // Function: Calls the recipe API with current ingredients
  async function apiRecipeResult() {

    // Prevent API call if no ingredients
    if (ingredients.length === 0) return;

    try {

      // Call backend service (e.g., Claude AI) and update recipe result state
      const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
      setRecipeResult(recipeMarkdown);
    } catch (error) {

      // Handle error gracefully
      console.error("Failed to fetch recipe:", error);
    }
  }

  // JSX rendering starts here
  return (
    <>
      {/* Header: Contains greeting and form to input ingredients */}
      <Header getIngredient={getIngredient} />

      {/* Main content area */}
      <main className='main'>

        {/* Ingredients section (only if user has entered some ingredients) */}
        {ingredients.length > 0 && (
          <section className='ingredients-list-section'>
            <h2>You currently have:</h2>

            {/* Ingredient chips/tags */}
            <div className='ingredients-list-container'>
              {getIngredients()}
            </div>
          </section>
        )}

        {/* Show "Generate Recipe" button if more than 2 ingredients */}
        {ingredients.length > 2 && (
          <RecipeGenerator generateRecipe={apiRecipeResult} />
        )}

        {/* Show recipe result if available and sufficient ingredients */}
        {recipeResult.length > 0 && ingredients.length > 2 && (
          <RecipeRecommendation recipe={recipeResult} />
        )}

      </main>
    </>
  );
}

// Export App component as default
export default App;
