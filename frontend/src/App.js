import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [initialData, setInitialData] = useState([{}]);

  useEffect(() => {
    fetch('/api').then(
      response => response.json()
    ).then(data => setInitialData(data))
  }, [])


  return (
    <div className="App">
      <header className="App-header">
  <h1>{initialData.title}</h1>
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

      </header>
    </div>
  );
}

export default App;
