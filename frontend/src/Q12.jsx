function Q12() {
  function runCode() {
    const s = {
      name: "Arun",
      marks: 85,
      address: undefined,
      tags: ["a", "b"]
    };
    console.log(JSON.stringify(s));
    console.log(JSON.parse('{"x":1,"y":[2,3]}').y.length);
    console.log(typeof JSON.parse("42"));
  }
  return (
    <div>
      <h2>Q12 - JSON Methods</h2>
      <button onClick={runCode}>Run Code</button>
      <p>Check the browser console for the output.</p>
    </div>
  );
}
export default Q12;
