//given code//
// async function loadStudents() {
//   try {
//     const res = await axios.get("/api/students");
//     setStudents(res.data);
//   } catch (err) {
//     console.log(err.response.status);
//   }
// }

//corrected code//
import { useState } from "react";
import axios from "axios";
function Q4() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  async function loadStudents() {
    setError("");
    try {
      const res = await axios.get(
        "http://localhost:8080/api/students");
      setStudents(res.data);
      console.log("Students:", res.data);
    } catch (err) {
      const message = err.response
        ? `HTTP ${err.response.status}: ${
            err.response.data?.message || err.message
          }`
        : "Server is not reachable or the request was blocked.";

      setError(message);
      console.log("Error:", message);
    }
  }
  return (
    <div>
      <h2>Q4 - Load Students</h2>
      <button onClick={loadStudents}>
        Load Students
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Q4;


