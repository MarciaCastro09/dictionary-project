import logo_shecodes from './logo_shecodes.png';
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
    <div className="container">
      <header className="App-header">
      <img src={logo_shecodes} className="App-logo img-fluid"
      alt="logo"/>
      </header>
      <main>
        <Dictionary/>
      </main>
      <footer className="text-center">
        <small>Coded by Márcia Castro</small></footer>
      </div>
    </div>
  );
}


