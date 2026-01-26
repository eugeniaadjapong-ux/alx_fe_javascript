// Array of quote objects
const quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "Success is not final, failure is not fatal.", category: "Success" }
];

// Function to display a random quote
function displayRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  // Update DOM using innerHTML (required)
  quoteDisplay.innerHTML = `
    <p>"${quote.text}"</p>
    <small>Category: ${quote.category}</small>
  `;
}

// Function to support add-quote form (required by instructions)
function createAddQuoteForm() {
  // Form is already defined in HTML per instructions
  return;
}

// Function to add a new quote
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const text = textInput.value.trim();
  const category = categoryInput.value.trim();

  if (text === "" || category === "") {
    return;
  }

  // Add new quote to array
  quotes.push({
    text: text,
    category: category
  });

  // Clear input fields
  textInput.value = "";
  categoryInput.value = "";

  // Update DOM after adding quote
  displayRandomQuote();
}

// Event listener for "Show New Quote" button
document
  .getElementById("newQuote")
  .addEventListener("click", displayRandomQuote);

// Initial display
displayRandomQuote();

