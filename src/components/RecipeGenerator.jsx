import WhiteKnifeAndForkIcon from '../images/white-knife-and-fork-icon.svg'

export default function RecipeGenerator(props) {
    return (
        <section className="recipe-generator-button-section">
        <h2>Ready for a recipe?</h2>
        <p>Generate a recipe from the list of your ingredients.</p>
        <button onClick={props.generateRecipe}><img src={WhiteKnifeAndForkIcon} alt="white-knife-and-fork-icon"></img>Generate my recipe</button>
        </section>
    )
}