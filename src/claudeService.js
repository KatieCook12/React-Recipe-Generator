// Imports the Anthropic SDK for calling Claude models
import Anthropic from "@anthropic-ai/sdk";

// System prompt that guides the assistant's behavior
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. 
You don't need to use every ingredient they mention in your recipe. 
The recipe can include additional ingredients they didn't mention, 
but try not to include too many extra ingredients. 
Format your response in markdown to make it easier to render to a web page.
`;

// Initialises the Anthropic client with API key from environment variables
// WARNING: dangerouslyAllowBrowser is unsafe for production use — use only for local testing
const anthropic = new Anthropic({
  apiKey: process.env.REACT_APP_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true,
});

// Debugs log to verify API key is loaded (will show in browser console)
console.log("KEY:", process.env.REACT_APP_ANTHROPIC_API_KEY);

/**
 * Calls Claude to get a recipe suggestion based on the provided ingredients.
 * @param {string[]} ingredientsArr - Array of ingredient strings.
 * @returns {Promise<string>} - Recipe content in markdown format.
 */

export async function getRecipeFromChefClaude(ingredientsArr) {

  // Turns the array into a readable string
  const ingredientsString = ingredientsArr.join(", ");

  // Creates a message using Claude's message API
  const msg = await anthropic.messages.create({
    model: "claude-3-haiku-20240307", // Claude model
    max_tokens: 1024,                 // Max token length for response
    system: SYSTEM_PROMPT,           // Instructions for Claude
    messages: [
      {
        role: "user",
        content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
      },
    ],
  });

  // Returns the text content from the first message response
  return msg.content[0].text;
}
