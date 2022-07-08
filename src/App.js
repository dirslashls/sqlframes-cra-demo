import logo from './logo.svg';
import './App.css';
import SQLFramesApp from './SQLFramesApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://sqlframes.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn SQL Frames
        </a>
      </header>
      <SQLFramesApp/>
    </div>
  );
}

export default App;
