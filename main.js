// Powered by Quotable
// https://github.com/lukePeavey/quotable

document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const button = document.querySelector("button");
  const quote = document.querySelector("blockquote q");
  const cite = document.querySelector("blockquote cite");

  async function updateQuote() {
    // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      quote.textContent = data.content;
      cite.textContent = data.author;
    } else {
      quote.textContent = "Hmm something is wrong, sorry about that.</br> Happy birthday";
      console.log(data);
    }
  }

  // Attach an event listener to the `button`
  button.addEventListener("click", updateQuote);

  // call updateQuote once when page loads
  updateQuote();
});