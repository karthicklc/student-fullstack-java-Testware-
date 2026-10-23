// import { useEffect, useState } from "react";
// import { getStudents } from "./api";
// function App() {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   useEffect(() => {
//     getStudents().then((data) => setStudents(data)).catch((err) => {
//         setError(err.response?.data?.message ||err.message ||"Failed to load students");
//       })
//       .finally(() => setLoading(false));
//   }, []);
//   if (loading) {
//     return <h2>Loading students...</h2>;
//   }
//   if (error) {
//     return <h2>Error: {error}</h2>;
//   }
//   return (
//     <div style={{ padding: "24px" }}>
//       <h1>Student Management System</h1>
//       {students.length === 0 ? (
//         <p>No students found.</p>
//       ) : (
//         <table border="1" cellPadding="10">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Department</th>
//               <th>Marks</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => (
//               <tr key={student.id}>
//                 <td>{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.email}</td>
//                 <td>{student.department}</td>
//                 <td>{student.marks}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default App;

//Q1//
// import Q1 from "./Q1";
// function App() {
//   return <Q1 />;
// }
// export default App;

//Q2//
// import Q2 from "./Q2";
// function App() {
//   return <Q2 />;
// }
// export default App;

//Q3//
// import Q3 from "./Q3";
// function App() {
//   return <Q3 />;
// }
// export default App;

//Q4//
// import Q4 from "./Q4";
// function App() {
//   return <Q4 />;
// }
// export default App;

//Q7//
// import Q7 from "./Q7";
// function App() {
//   return <Q7 />;
// }
// export default App;

//Q8//
// import Q8 from "./Q8";
// function App() {
//   return <Q8 />;
// }
// export default App;

//Q9//
// import Q9 from "./Q9";
// function App() {
//   return <Q9 />;
// }
// export default App;

//Q10//
// import Q10 from "./Q10";
// function App() {
//   return <Q10 />;
// }
// export default App;

//Q11//
// import Q11 from "./Q11";
// function App() {
//   return <Q11 />;
// }
// export default App;

//Q12//
// import Q12 from "./Q12";
// function App() {
//   return <Q12 />;
// }
// export default App;

//PART C//
//Q15//
// import Q15 from "./Q15";
// function App() {
//   return <Q15 />;
// }
// export default App;

//Q16//
// import Q16 from "./Q16";
// function App() {
//   return <Q16 />;
// }
// export default App;

//Q17//
import Q17 from "./Q17";
function App() {
  return <Q17 />;
}
export default App;








