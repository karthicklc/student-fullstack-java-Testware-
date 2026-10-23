//given code//
// function Q3() {
//   const [students, setStudents] = useState();
//   useEffect(() => {
//     axios.get("http://localhost:8080/api/students")
//       .then(res => setStudents(res.data));
//   });
//   return (
//     <ul>
//       {students.map(s => <li>{s.name}</li>)}
//     </ul>
//   );
// }
// export default Q3;

//corrected code//
import { useEffect, useState } from "react";
import axios from "axios";
function Q3() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/students")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        setError(
          err.response?.data?.message ||
          err.message ||
          "Failed to load students"
        );
      });
  }, []);
  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }
  return (
    <div>
      <h2>Q3 - Student List</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Q3;


