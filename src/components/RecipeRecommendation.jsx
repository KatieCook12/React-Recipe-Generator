// Importing the ReactMarkdown component, which allows us to render Markdown content as HTML in React
import ReactMarkdown from "react-markdown"

// Defining a functional React component called RecipeRecommendation
// It takes props as an argument, passed in from the parent component
export default function RecipeRecommendation(props) {
    return (
        
        // A section container for displaying the generated recipe recommendation
        <section className="generated-recipe">
            
            {/* Heading for the recommendation section */}
            <h2>Recommendation:</h2>
            
            {/* ReactMarkdown takes the recipe text (written in Markdown) from props 
                and converts it into properly formatted HTML */}
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}
