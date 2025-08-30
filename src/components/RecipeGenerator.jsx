// Importing the white knife and fork icon SVG file so it can be used as an image in the component
import WhiteKnifeAndForkIcon from '../images/white-knife-and-fork-icon.svg'

// Defining a functional React component called RecipeGenerator
// It takes props as an argument, which are passed from the parent component
export default function RecipeGenerator(props) {
    return (

        // A section container for the recipe generator button and related content
        <section className="recipe-generator-button-section">
            
            {/* Heading asking the user if they are ready for a recipe */}
            <h2>Ready for a recipe?</h2>
            
            {/* Brief text explaining what the button does */}
            <p>Generate a recipe from the list of your ingredients.</p>
            
            {/* Button triggers the generateRecipe function passed from props when clicked */}
            <button onClick={props.generateRecipe}>

                {/* The imported WhiteKnifeAndForkIcon is displayed inside the button */}
                <img src={WhiteKnifeAndForkIcon} alt="white knife and fork icon" />
                Generate my recipe
            </button>
        </section>
    )
}
