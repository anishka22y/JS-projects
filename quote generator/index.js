
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
        author:"Kevin Kruse",
        image: "kevin kruse.jpeg"
    },
    {
        quote:"The question isn’t who is going to let me; it’s who is going to stop me.",
        author:"Ayn Rand",
        image: "AynRand.jpg"},
    {
        quote:"Life is what we make it, always has been, always will be.",
        author:"Grandma Moses",
        image: "grandma moses.jpg"
    },

   {
        quote:"You may be disappointed if you fail, but you are doomed if you don’t try.",
        author:"Beverly Sills",
        image: "Beverly.jpg"
    },

    {
        quote:"If you do what you’ve always done, you’ll get what you’ve always gotten.",
         author:"Tony Robbins",
        Image: "tony.jpg"
        },

   {
        quote:"Do what you can, where you are, with what you have.",
        author:"Teddy Roosevelt",
    image: "teddy.jpg"
    },

    {
     quote:"Dream big and dare to fail.",
     author:"Norman Vaughan",
    image: "norman.jpg"
    },    

     {
        quote:"Remember that not getting what you want is sometimes a wonderful stroke of luck.",
        author:"Dalai Lama",
        image: "dalai.jpg"
    },
        
        {
            quote:"Education costs money.  But then so does ignorance.",
            author:"Sir Claus Moser",
            image: "lord.jpg"
        },
            
            {
                quote:"Build your own dreams, or someone else will hire you to build theirs.",
                author:"Farrah Gray",
                image: "farrah.jpg"
            },    
                
                {
                    quote:"You become what you believe.",
                    author:"Oprah Winfrey",
                    Image: "oprah.jpg"
                }        
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
