import React, { useState } from 'react';
import './App.css';  // Import the CSS file


function App() {
  const [text, setText] = useState(""); // State for textarea content
  const [searchText, setSearchText] = useState(""); // State for search string
  const [replaceText, setReplaceText] = useState(""); // State for replacement string

  // Function to calculate unique word count (case-insensitive)
  const getUniqueWordsCount = (text) => {
    const words = text.toLowerCase().match(/\b[a-z0-9']+\b/g);
  
    if (!words || words.length === 0) {
      return 0; // If there are no words, return 0
    }
  
    const uniqueWords = new Set(words); 
    return uniqueWords.size; 
  };
  

  // Function to calculate character count excluding spaces and punctuation
  const getCharacterCount = (text) => {
    return text.replace(/[^a-zA-Z0-9]/g, "").length;
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };


  // Function to replace the searched string with the replacement string (case-sensitive)
  const handleReplace = () => {
    const updatedText = text.replaceAll(searchText, replaceText);
    setText(updatedText);
  };

  return (
    <div className="container">
      <h2> Real-Time Text Analysis and String Replacement</h2>
      {/* Textarea for input */}
      <textarea
        value={text}
        onChange={handleTextChange}
        rows="10"
        cols="50"
        placeholder="Enter your text Here.."
      />

      {/* Real-time statistics */}
      <div className="statistics">
        <p>Unique Words: {getUniqueWordsCount(text)}</p>
        <p>Character Count (excluding spaces & punctuation): {getCharacterCount(text)}</p>
      </div>

      {/* Inputs for string replacement */}
      <div>
        <label id='text'>Search string:</label> 
        <input
          type="text"
          placeholder="type here.."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
         <label id='text'>Replace string:</label>
        <input
          type="text"
          placeholder="Type here.."
          value={replaceText}
          onChange={(e) => setReplaceText(e.target.value)}
        />
      </div>
      
      {/* Replace All Button */}
      <button onClick={handleReplace}>Replace All</button>
    </div>
  );
}

export default App;
