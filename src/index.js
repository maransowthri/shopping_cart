import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  return (
    <>
      <input type="checkbox" value={checked} onChange={setChecked} />
      {checked ? "Checked" : "Not Checked"}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
