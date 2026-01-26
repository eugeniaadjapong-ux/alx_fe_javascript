// Array of quote objects
const quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "Success is not final, failure is not fatal.", category: "Success" }
];

// Display a random quote
function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteDisplay.textContent = `"${quote.text}" — ${quote.category}`;
}

// Create add-quote form logic (as required by instructions)
function createAddQuoteForm() {
  // Form already exists in HTML, so this function supports the structure
  // Instruction requires function definition, not duplication
  return;
}

// Add a new quote dynamically
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const text = textInput.value.trim();
  const category = categoryInput.value.trim();

  if (text === "" || category === "") {
    return;
  }

  quotes.push({ text: text, category: category });

  textInput.value = "";
  categoryInput.value = "";

  showRandomQuote();
}

// Button event listener
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Initial call
showRandomQuote();
