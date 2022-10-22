import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const addBy10 = () => {
    dispatch({ type: "add", payload: 10 });
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy10}>Add by 10</button>
    </div>
  );
}

export default App;
