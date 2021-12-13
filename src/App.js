
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="heute" />
        </main>
        <section className="about">
          <h4>About the project</h4>
          bleblablabalbla
        </section>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/beatriz-matafora-bab991108/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beatriz Matafora
            </a>
            , open-sourced on{" "}
            <a
              href="https://github.com/servivo/dictionary-app"
              target="_blank"
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

