function Q8() {
  function f() {
    console.log("1");
    return Promise.resolve().then(() => console.log("2"));
  }
  function runCode() {
    console.log("3");
    f();
    console.log("4");
  }
  return (
    <div>
      <h2>Q8 - Predict the Output</h2>
      <button onClick={runCode}>Run Code</button>
      <p>Check the browser console for the output.</p>
    </div>
  );
}
export default Q8;
