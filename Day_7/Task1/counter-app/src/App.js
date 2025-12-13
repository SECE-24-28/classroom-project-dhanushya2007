import { useState } from 'react';
import './App.css';
function App() { //displays in ui=> also by usestatehook
  //let val=0;
  //1.variable 2.func to update the value of 1 variable
  let [val,setVal] = useState(10);

  const handleIncrement = () => {
    //val =val +1;
    setVal(val+1);
    console.log("Increment button clicked",val);
  };
  const handleDecrement = () => {
    //val =val -1;
    setVal(val-1);
    console.log("Decrement button clicked",val);
  };
  return (
    <div className="App">
      <h1>Learning react</h1>
      <div className="counter">
        <h1>{val}</h1>
        <div className="buttons">
          <button onClick={handleIncrement} className="inc">Increment</button>
          <button onClick={handleDecrement} className="dec">Decrement</button>
        </div>
      </div>
    </div>
  );
}
export default App;