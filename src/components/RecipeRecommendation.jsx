import ReactMarkdown from "react-markdown"

export default function RecipeRecommendation(props) {
    return (
        <section className="generated-recipe">
            <h2>Recommendation:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>)
}