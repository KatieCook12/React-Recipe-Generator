# 🥗 Recipe Generator

A recipe generator app built with React, integrating the **Anthropic AI SDK** to suggest creative recipe ideas. The app takes user input (ingredients or preferences) and outputs AI-generated recipe suggestions in a clean, user-friendly interface.

Building this project deepened my understanding of React’s component structure, handling API requests, and managing environment variables securely. I also learned how to structure a React project for scalability and how to work with third-party AI APIs to enrich user experiences.

<img src="src/images/recipe-generator-screenshot.png" alt="Recipe Generator UI" width="500">

---

## 🛠 Tech Stack

* **React** – Component-based frontend framework
* **JavaScript (ES6+)** – Core application logic
* **Axios** – HTTP client for API calls
* **CSS3** – Styling and responsive layouts
* **React Markdown** – Rendering recipe output with rich formatting
* **Anthropic AI SDK** – AI-driven recipe generation
* **dotenv** – Managing environment variables securely

---

## ✨ Key Features

* AI-powered recipe generation from ingredients or prompts
* Clean, minimal UI for distraction-free usage
* Reusable, modular React components
* Markdown rendering for better recipe formatting
* API key management via `.env.local`
* Responsive design for desktop viewports

---

## ⚙️ Build Process

1. Created a new React project with `create-react-app`
2. Integrated **Anthropic AI SDK** and configured `.env.local` for API keys
3. Built reusable components for input, recipe output, and layout
4. Styled UI with modern, minimal CSS
5. Used **Axios** for making API requests
6. Rendered AI-generated recipes with **React Markdown**

---

## 📚 Lessons Learnt

* How to securely use environment variables in React apps
* Best practices for making API requests with Axios
* Handling asynchronous operations with `async/await`
* Structuring React projects into reusable modules
* Using markdown rendering for formatted content
* Balancing UI/UX simplicity with AI complexity

---

## 🧩 Areas for Improvement

* Add mobile-responsive design
* Implement user authentication for saving recipes
* Add copy/share/download recipe features
* Enable smart ingredient suggestions based on user input
* Expand to support multiple AI models
* Add unit and integration testing with React Testing Library
* Improve error handling and loading states
* Improve accessibility features

---

## 🛠 Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/recipe-generator.git
   cd recipe-generator
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root of your project and add your API key:

   ```
   REACT_APP_API_KEY=your_anthropic_api_key
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

5. **Build for production:**

   ```bash
   npm run build
   ```
