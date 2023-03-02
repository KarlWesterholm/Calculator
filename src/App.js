import {
  useState,
  useRef,
  useEffect
} from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  // const resultRef = useRef(null);
  const displayRef = useRef(null);
  const [display, setDisplay] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("");

  useEffect(() => {
    setDisplay(result)
  }, [result])

  // Adds new number, n, to input display
  function newNum(e,n) {
    e.preventDefault();
    inputRef.current.value = inputRef.current.value * 10 + n;
  }
  
  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value))
    setDisplay(`${inputRef.current.value} + `);
    resetInput(e);
    setOperation("plus");
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function equals(e) {
    e.preventDefault();
    switch(operation) {
      case "plus":
        setResult((result) => result + Number(inputRef.current.value));
        break;
      case "minus":
        setResult((result) => result - Number(inputRef.current.value));
        break;
      case "times":
        setResult((result) => result * Number(inputRef.current.value));
        break;
      case "divide":
        setResult((result) => result / Number(inputRef.current.value));
        break;
      default:
        return null
    }
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
      <div className="App">
        <div>
          <h1>Simplest Working Calculator</h1>
        </div>
        <form>
          <p ref={displayRef}>
            {display}
          </p>
          <input
              pattern="[0-9]"
              ref={inputRef}
              type="number"
              placeholder="Type a number"
          />
          <div id="buttons">
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={times}>*</button>
            <button onClick={divide}>/</button>
            <button onClick={(e) => newNum(e,1)}>1</button>
            <button onClick={(e) => newNum(e,2)}>2</button>
            <button onClick={(e) => newNum(e,3)}>3</button>
            <button onClick={(e) => newNum(e,4)}>4</button>
            <button onClick={(e) => newNum(e,5)}>5</button>
            <button onClick={(e) => newNum(e,6)}>6</button>
            <button onClick={(e) => newNum(e,7)}>7</button>
            <button onClick={(e) => newNum(e,8)}>8</button>
            <button onClick={(e) => newNum(e,9)}>9</button>
            <button onClick={(e) => newNum(e,0)}>0</button>
            <button id="equalSign" onClick={equals}>=</button>
            <button onClick={resetInput}>reset input</button>
            <button onClick={resetResult}>reset result</button>
          </div>
        </form>
      </div>
  );
}

export default App;
