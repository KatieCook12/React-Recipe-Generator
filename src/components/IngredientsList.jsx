import GreenCrossIcon from '../images/green-cross-icon.svg'

export default function IngredientsList(props) {
    return (
        <div className="ingredient-pill" ref={props.ref}>
            <p>{props.ingredientName}</p>
            <button onClick={props.removeIngredient} className='remove-ingredient'>
            <img
                src={GreenCrossIcon}
                alt="green-cross-icon"
            />
            </button>
        </div>
    )
}