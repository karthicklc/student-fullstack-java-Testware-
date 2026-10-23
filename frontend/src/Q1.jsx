//given code//
// import { useEffect, useState } from "react";
// function Q1() {
//   const [student, setStudent] = useState(null);
//   useEffect(() => {
//     fetch("http://localhost:8080/api/students/99")
//       .then((res) => res.json())
//       .then((data) => {
//         setStudent(data);
//         console.log(data.name);
//       })
//       .catch((err) => {
//         console.log("Error: " + err.message);
//       });
//   }, []);
//   return (
//     <div>
//       <h2>Q1 - Student Details</h2>
//       {student && <p>Name: {student.name}</p>}
//     </div>
//   );
// }
// export default Q1;

//corrected code//
import { useEffect, useState } from "react";
function Q1() {
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/api/students/99")
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(
            data.error || data.message || `HTTP ${res.status}`
          );
        }
        return data;
      })
      .then((data) => {
        setStudent(data);
        console.log(data.name);
      })
      .catch((err) => {
        setError(err.message);
        console.log("Error: " + err.message);
      });
  }, []);
  return (
    <div>
      <h2>Q1 - Student Details</h2>
      {error && (
        <p style={{ color: "red" }}>
          Error: {error}
        </p>
      )}
      {student && <p>Name: {student.name}</p>}
    </div>
  );
}
export default Q1;

