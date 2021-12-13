import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/de/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
      setLoaded(true);
      search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>
            What German word do you want to look up? / Welches deutsche Wort
            möchtest du nachschlagen?
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a German word"
              onChange={handleKeywordChange}
            ></input>
          </form>
          <div className="hint">
            suggested words: umfahren, jedoch, nichtsdestotrotz,
            Haftpflichtversicherung...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
      load();
      return "Loading";
  }
}