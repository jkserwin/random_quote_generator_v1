/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

/*** 
 * Array to hold the quote objects to be pulled by the quote generator.
***/

const quotes = [
  {
    quote: "Yabba Dabba Do!",
    source: 'Fred Flintstone',
    citation: 'The Flintstones',
    year: 1960
  },
  {
    quote: "Hey what's up",
    source: 'me',
    citation: 'out loud',
    year: 2021
  },
  {
    quote: "Showing off is the fool's idea of glory",
    source: 'Bruce Lee'
  },
  {
    quote: "I'm all the X-Men's dad.",    
    source: 'Professor Charles Xavier',
    citation: 'X2: X-Men United',
    year: 2003
  },
  {
    quote:'Pizza! Pizza!',
    source: 'Little Caesar',
    year: 1979
  },
];

/***
 * Returns a random quote from the quotes array.
***/

function getRandomQuote() {
  const randomNumber = Math.floor( Math.random() * quotes.length );
  const randomQuote = quotes[randomNumber]
  return randomQuote;
}

/***
 * Selects a random quote from the quotes array, checks which properties it contains, and inserts it into the HTML on the page.
***/
let html = '';
function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  html += `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}
  `;
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`
  };
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`
  };
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html; 
}
printQuote();
console.log(html);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);