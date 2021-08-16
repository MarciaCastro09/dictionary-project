
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
    <div className="container">
      <header className="App-header">
      React Dictionary App
      </header>
      <main>
        <Dictionary/>
      </main>
      <footer className="text-center">
        <small>
          Coded by Márcia Castro and open sourced on{" "}
        <a
          href="https://github.com/MarciaCastro09/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
          </small></footer>
      </div>
    </div>
  );
}


