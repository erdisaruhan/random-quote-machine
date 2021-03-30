import React, { useState } from 'react'
import './index.css'

function App() {

const [quote, setQuote] = useState( {
  textQuote:"",
  authorQuote:""
})

async function generateQuote() {
  
  try {
    const response = await fetch("https://api.quotable.io/random")
    var quoteData = await response.json();

    setQuote({textQuote:quoteData.content,authorQuote:quoteData.author})
  } catch(err){
    console.error(err);
}

}
window.onload = generateQuote;


  return (
    <div id="quote-box">
      <p id="text">{quote.textQuote}</p>
      <p id="author">{quote.authorQuote}</p>
      <button id="tweet-quote">Twitter</button>
      <button id="new-quote" onClick={generateQuote}>New Quote</button>
    </div>
  );
}

export default App;
