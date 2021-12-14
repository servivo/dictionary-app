
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="Code" />
        </main>
        <section className="about">
          <h4>About the project</h4>
          My name is Beatriz and I started learning German when I was 7 years
          old. Back then, our teachers always encouraged us to use German to
          German dictionaries as a way to enhance our vocabularies and shift
          into thinking in German instead of translating everything in our
          heads. Now I live in Germany and have many expat friends learning
          German at adult age. I decided to create this dictionary for them as
          the final project of my React course. This app is suitable for people
          of all ages learning German. It works with the{" "}
          <a
            href="https://dictionaryapi.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Free Dictionary APi{" "}
          </a>{" "}
          which currently supports phonetic transcription, word class, word
          definition and usage examples for German language. The page won't
          reload when a word that is not saved in the API is typed. For the
          photos I am working with the{" "}
          <a
            href="https://www.pexels.com/de-de/api/documentation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pexels API{" "}
          </a>{" "} which is not fully optimized to the German language but it works. 
          I strive to keep on improving this page and helping others to learn
          German. Viel Erfolg! 🍀
        </section>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/beatriz-matafora-bab991108/"
              target="_blank"
              title="Follow me on LinkedIn 😊"
              rel="noopener noreferrer"
            >
              Beatriz Matafora
            </a>
            , open-sourced on{" "}
            <a
              href="https://github.com/servivo/dictionary-app"
              target="_blank"
              title="Follow me on GitHub 😄"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

