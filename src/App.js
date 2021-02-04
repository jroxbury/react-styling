import './App.css';
import {useState} from 'react';
import { Test } from './Test';
import {ThemeProvider} from './themeProvider.js';

const theme = {
  color:'blue',
  fontSize:'96px'
};

function App() {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={darkmode ? theme : {}}>
          <Test/>
        </ThemeProvider>
        <button onClick={() => setDarkmode(!darkmode)}>Theme Change</button>
      </header>
    </div>
  );
}

export default App;
