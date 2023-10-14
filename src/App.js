import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/Projects';
import Counter from './Components/Counter';
import Slider from './Components/Slider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!
        </p>
        <div>
          <MyComponent text = "Counter inside Text Wooohooo!"/>
        </div>

        <div>
          <Counter text = "Yuhhh"/>
        </div>

        <div>
          <Slider />
        </div>
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
