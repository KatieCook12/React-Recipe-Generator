// Importing the green cross icon SVG file so it can be used as an image source in the component
import GreenCrossIcon from '../images/green-cross-icon.svg'

// Defining a functional React component called IngredientsList
// It takes props as an argument, which are passed from the parent component
export default function IngredientsList(props) {

    return (

        // A container div for each ingredient item
        // The ref passed through props allows the parent to access this DOM node if needed
        <div className="ingredient-pill" ref={props.ref}>

            {/* Displaying the name of the ingredient passed in through props */}
            <p>{props.ingredientName}</p>
            
            {/* A button to remove the ingredient when clicked, calling the removeIngredient function from props */}
            <button onClick={props.removeIngredient} className='remove-ingredient'>

                {/* The imported GreenCrossIcon is used here as the image source for the button */}
                <img
                    src={GreenCrossIcon}
                    alt="green cross icon"
                />
            </button>
        </div>
    )
}
