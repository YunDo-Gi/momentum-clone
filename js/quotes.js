const quotes = [
    {
        quote: "When life gives you lemons, make lemonade.",
        author: "Elbert Hubbard"
    },
    {
        quote: "When you go through hardships and decide not to surrender, that is strength.",
        author: "Arnold Schwarzenegger"
    },
    {
        quote: "Light weight baby.",
        author: "Ronnie Coleman"
    },
    {
        quote: "But I know, somehow, that only when it is dark enough can you see the stars.",
        author: "Martin Luther King, Jr"
    },
    {
        quote: "Grind Hard, Shine Hard.",
        author: "Dwayne Johnson"
    },
    {
        quote: "It is better to fail in originality than to succeed in imitation.",
        author: "Herman Melville"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "In order to succeed, we must first believe that we can.",
        author: "Nikos Kazantzakis"
    },
    {
        quote: "I never dreamed about success, I worked for it.",
        author: "Estee Lauder"
    },
    {
        quote: "Do not try to be original, just try to be good.",
        author: "Paul Rand"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
