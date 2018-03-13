// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

const quotes = [
    {
        quote: "Don't cry because it's over, smile because it happened.",
        source: "Dr. Seuss"
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        source: "Marilyn Monroe",
        year: 1950
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        source: "Oscar Wilde",
        citation: "Famous Publication"

    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: "Albert Einstein",
        year: 1920,
        citation: "From the source himself"
    }
];

let quotesLength = quotes.length;

const getRandomQuote = () => {
    let randomID = Math.floor(Math.random() * quotesLength);
    let quoteSelected = quotes[randomID];
    return quoteSelected;
}

const printQuote = () => {
    let randomQuote = getRandomQuote();
    let html = "";
    // Insert in random quote
    html += '<p class="quote">' + randomQuote.quote + '</p>';
    // Insert in source -- remember to close tag
    html += '<p class="source">' + randomQuote.source;
    // Check for year if it exists in object
    if (randomQuote.year !== undefined) {
        // Insert year
        html += '<span class="year">' + randomQuote.year + '</span>';
    }
    // Check for citation in object if it exists
    if (randomQuote.citation !== undefined) {
        // Insert citation
        html += '<span class="citation">' + randomQuote.citation + '<span>';
    }
    // close 'p' tag
    html += '</p>';
    
    document.getElementById('quote-box').innerHTML = html;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
