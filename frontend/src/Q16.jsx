import { useState } from "react";
import { getStudent } from "./fetchApi";
function Q16() {
  const [output, setOutput] = useState("");
  async function testMissingStudent() {
    setOutput("Loading...");
    try {
      const student = await getStudent(99);
      setOutput(JSON.stringify(student, null, 2));
    } catch (error) {
      console.log(error.message);
      setOutput(error.message);
    }
  }
  return (
    <div>
      <h2>Q16 - Fetch Wrapper</h2>
      <button onClick={testMissingStudent}>
        Test Student ID 99
      </button>
      <pre>{output}</pre>
    </div>
  );
}
export default Q16;
