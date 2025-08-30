// Import the hamburger menu icon
import WhiteHamburgerMenuIcon from '../images/white-hamburger-menu-icon.svg';

// Header component that receives props (like getIngredients handler)
export default function Header(props) {
  return (

    // Main header container
    <header>
      
      {/* Hamburger menu icon */}
      <img 
        src={WhiteHamburgerMenuIcon} 
        alt="white hamburger menu icon" 
      />

      {/* Container for welcome text and input form */}
      <div className="welcome-message-and-form">
        
        {/* Welcome message section */}
        <div className="welcome-message">
          <h1>Generate your recipe!</h1>
          <p>Enter at least three ingredients to generate a recipe</p>
        </div>

        {/* Input form for entering ingredients */}
        <form onSubmit={props.getIngredient}>
          <input
            type="text"                
            placeholder="e.g potatoes"
            name="ingredient"
          />
        </form>
        
      </div>
    </header>
  );
}
