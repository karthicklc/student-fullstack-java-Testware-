//given code//
// function Q2() {
//   const saveStudent = () => {
//     fetch("http://localhost:8080/api/students", {
//       method: "POST",
//       body: {
//         name: "Arun",
//         email: "arun@gmail.com",
//         department: "CSE",
//         marks: 85
//       }
//     });
//   };
//   return (
//     <div>
//       <h2>Q2 - Add Student</h2>
//       <button onClick={saveStudent}>Save Student</button>
//     </div>
//   );
// }
// export default Q2;


//corrected code//
// import { useState } from "react";
// function Q2() {
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const saveStudent = async () => {
//     setMessage("");
//     setError("");
//     try {
//       const res = await fetch("http://localhost:8080/api/students", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           name: "Arun",
//           email: "arun1@gmail.com",
//           department: "CSE",
//           marks: 85
//         })
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         throw new Error(
//           data.error || data.message || JSON.stringify(data)
//         );
//       }
//       setMessage("Student saved successfully!");
//       console.log("Saved student:", data);
//     } catch (err) {
//       setError(err.message);
//       console.log("Error:", err.message);
//     }
//   };
//   return (
//     <div>
//       <h2>Q2 - Add Student</h2>
//       <button onClick={saveStudent}>Save Student</button>
//       {message && <p style={{ color: "green" }}>{message}</p>}
//       {error && <p style={{ color: "red" }}>Error: {error}</p>}
//     </div>
//   );
// }
// export default Q2;


//Error: The POST request sends a JavaScript object directly as the body, omits the Content-Type: application/json header, and does not handle the response.
//Reason: Fetch expects the request body to be a supported body type, so the object is not automatically converted into JSON and the backend may reject the request.

