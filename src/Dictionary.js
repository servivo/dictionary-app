import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/de/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001484f269d707f4860b975fda09f82f1dc";
      let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
      let headers = { Authorization: `Bearer ${pexelsApiKey}`};
      axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        <h5>German to German dictionary 📖</h5>
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
        <Photos photos={photos} />
      </div>
    );
  } else {
      load();
      return "Loading";
  }
}