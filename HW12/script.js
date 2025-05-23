// This script will fetch quotes from the ZenQuotes API and display them on the page

// API endpoint for ZenQuotes
// Note: The API requires a proxy to bypass the same-origin policy when using LiveServer, so we're suing corsproxy.io
// Try removing the proxy and see what happens!
const API_URL = 'https://corsproxy.io/?url=https://zenquotes.io/api/random';
// Review the documentation for the API here: https://docs.zenquotes.io/zenquotes-documentation/#api-response

// DOM Elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Function to fetch a new quote from the API
async function fetchQuote() {
    try {
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new Error(`could not fetch resource`);
        }
        const data = await response.json();
        data.forEach(element => {
            displayQuote(element.q, element.a);
            
        });
        // TODO: Convert the response to JSON
        // TODO: Extract the quote and author from the response
        // TODO: Update the DOM with the new quote and author
        
    } catch (error) {
        console.error(error.message);
    }
}

// Function to display the quote and author in the DOM
function displayQuote(quote, author) {
    quoteText.innerHTML = quote;
    quoteAuthor.innerHTML = author;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Load a quote when the page first loads
    fetchQuote();
    newQuoteBtn.addEventListener("click", () => {
        fetchQuote();
    });
    
    // TODO: Add event listener to the "New Quote" button
    // It should call fetchQuote() when clicked
});