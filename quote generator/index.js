
const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        image: "stevejobs.jpg"
    },
    
    {
        quote: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs",
        image: "stevejobs.jpg"
    },
    {
        quote: "And now that you don't have to be perfect, you can be good.",
        author: "John Steinbeck",
        image: "john.jpg"
    },
    {      
        quote:"Life isn’t about getting and having, it’s about giving and being.",
        author:"Kevin Kruse"},
    // Add more quotes and authors here
];

const quoteElement = document.getElementById('quote');
const authorImageElement = document.getElementById('author-image');
const authorNameElement = document.getElementById('author-name');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', generateQuote);

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteElement.textContent = randomQuote.quote;
    authorNameElement.textContent = randomQuote.author;
    authorImageElement.src = randomQuote.image;
}

// Initial quote generation
generateQuote();
