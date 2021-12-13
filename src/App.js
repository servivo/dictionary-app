
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
          <small>Coded by BM</small>
        </footer>
      </div>
    </div>
  );
}

