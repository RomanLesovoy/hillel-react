import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome";
import WelcomeF from "./components/WelcomeF";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome text="Oleg" />
        <WelcomeF text="Masha" />
      </header>
    </div>
  );
}

export default App;
