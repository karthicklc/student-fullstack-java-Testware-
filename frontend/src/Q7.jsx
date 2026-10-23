import { useState } from "react";
function Q7() {
  const [output, setOutput] = useState([]);
  function runCode() {
    setOutput([]);
    console.log("A");
    fetch("http://localhost:8080/api/students")
      .then(() => console.log("B"));
    setTimeout(() => console.log("C"), 0);
    Promise.resolve().then(() => console.log("D"));
    console.log("E");
  }
  return (
    <div>
      <h2>Q7 - Predict the Output</h2>
      <button onClick={runCode}>Run Code</button>
      <p>Check the browser console for the output.</p>
    </div>
  );
}
export default Q7;
