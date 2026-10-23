function Q10() {
  async function runCode() {
    const res = await fetch(
      "http://localhost:8080/api/students/99"
    );
    console.log(res.ok);
    console.log(res.status);
    const data = await res.json();
    console.log(data.error);
  }
  return (
    <div>
      <h2>Q10 - Fetch API</h2>
      <button onClick={runCode}>Run Code</button>
    </div>
  );
}
export default Q10;
