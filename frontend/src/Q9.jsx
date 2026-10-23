import axios from "axios";
function Q9() {
  async function runCode() {
    try {
      await axios.get("http://localhost:8080/api/students/99");
      console.log("OK");
    } catch (err) {
      console.log(err.response.status);
      console.log(err.response.data.error);
    }
    console.log("Done");
  }  return (
    <div>
      <h2>Q9 - Axios Error Handling</h2>
      <button onClick={runCode}>Run Code</button>
    </div>
  );
}
export default Q9;
