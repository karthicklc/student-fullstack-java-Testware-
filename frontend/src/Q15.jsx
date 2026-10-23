import { useState } from "react";
import { deleteStudent, getStudents } from "./api";
function Q15() {
  const [output, setOutput] = useState("");
  async function testDelete() {
    const result = await deleteStudent(99);
    setOutput(
      typeof result === "string"
        ? result
        : JSON.stringify(result, null, 2)
    );
  }
  async function testServerDown() {
    const result = await getStudents();
    setOutput(
      typeof result === "string"
        ? result
        : JSON.stringify(result, null, 2)
    );
  }
  return (
    <div>
      <h2>Q15 - Axios Service Module</h2>
      <button onClick={testDelete}>
        Test Missing Student
      </button>
      <button onClick={testServerDown}>
        Test Server Unavailable
      </button>
      <pre>{output}</pre>
    </div>
  );
}
export default Q15;
