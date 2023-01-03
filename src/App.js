import { useState } from "react";
import "./App.css";
import Display from "./Display";
import Quetions from "./Quetions.json";

function App() {
  const [marks, setMarks] = useState([]);
  const changeHandler = (value, index) => {
    marks[index] = value;
    setMarks([...marks]);
  };

  return (
    <center>
      <h1>
        <span>Q</span>uiz <span>A</span>pp
      </h1>

      <div className="app">
        {Quetions.map((quetion, index) => {
          return (
            <Display
              quetion={quetion}
              index={index}
              changeHandler={changeHandler}
            />
          );
        })}
        <button onClick={() => alert(marks.reduce((a, b) => a + b, 0) + "/10")}>
          Submit
        </button>
      </div>
    </center>
  );
}

export default App;
