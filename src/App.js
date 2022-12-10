import './App.css';
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const handlePlus = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleMinus = () => {
    setCount((prevState) => prevState - 1);
  };

  const handleDisabled = () => {
    setDisabled((prevState) => !prevState);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <div>
          <button data-testid="minus-button" onClick={handleMinus} disabled={disabled}>
            -
          </button>
          <button data-testid="plus-button" onClick={handlePlus} disabled={disabled}>
            +
          </button>
        </div>
        <div>
          <button data-testid="on/off-button" style={{backgroundColor: 'blue'}} onClick={handleDisabled}>
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
