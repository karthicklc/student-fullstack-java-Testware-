import { useEffect, useRef, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;
async function request(url, options = {}) {
  let response;
  try {
    response = await fetch(`${API_URL}${url}`, {
      ...options,
      headers: {
        ...(options.body
          ? { "Content-Type": "application/json" }
          : {}),
        ...options.headers,
      },
    });
  } catch {
    throw new Error(
      "Server is not reachable. Please start the Spring Boot backend."
    );
  }
  const text = await response.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  if (!response.ok) {
    const error = new Error(
      typeof data === "string"
        ? data || `HTTP ${response.status}`
        : data?.error ||
          data?.message ||
          `HTTP ${response.status}`
    );
    error.status = response.status;
    error.data = data;
    throw error;
  }
  return data;
}
function Q17() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    marks: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [message, setMessage] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const latestRequest = useRef(0);
  useEffect(() => {
    const controller = new AbortController();
    const requestId = ++latestRequest.current;
    const timer = setTimeout(async () => {
      setLoading(true);
      setError("");
      try {
        const trimmedSearch = search.trim();
        const url = trimmedSearch
          ? `/api/students/search?name=${encodeURIComponent(trimmedSearch)}`
          : "/api/students";
        const data = await request(url, {
          signal: controller.signal,
        });
        if (requestId === latestRequest.current) {
          setStudents(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (err.name === "AbortError") return;
        if (requestId === latestRequest.current) {
          setError(err.message || "Unable to load students");
          setStudents([]);
        }
      } finally {
        if (
          !controller.signal.aborted &&
          requestId === latestRequest.current
        ) {
          setLoading(false);
        }
      }
    }, 300);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [search, refreshKey]);
  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
    setFieldErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  }
  async function handleAdd(event) {
    event.preventDefault();
    setFieldErrors({});
    setMessage("");
    const student = {
      ...form,
      marks: form.marks === "" ? null : Number(form.marks),
    };
    try {
      await request("/api/students", {
        method: "POST",
        body: JSON.stringify(student),
      });
      setForm({
        name: "",
        email: "",
        department: "",
        marks: "",
      });
      setSearch("");
      setMessage("Student added successfully");
      setRefreshKey((previous) => previous + 1);
    } catch (err) {
      if (
        err.status === 400 &&
        err.data &&
        typeof err.data === "object" &&
        !Array.isArray(err.data)
      ) {
        setFieldErrors(err.data);
        setMessage("Please correct the errors shown below.");
      } else {
        setMessage(err.message || "Unable to add student");
      }
    }
  }
  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (!confirmed) return;
    setMessage("");
    try {
      await request(`/api/students/${id}`, {
        method: "DELETE",
      });
      setStudents((previous) =>
        previous.filter((student) => student.id !== id)
      );
      setMessage("Student deleted successfully");
      setRefreshKey((previous) => previous + 1);
    } catch (err) {
      setMessage(err.message || "Unable to delete student");
    }
  }
  return (
    <main style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h2>Q17 - Student Management</h2>
      <h3>Add Student</h3>
      <form onSubmit={handleAdd}>
        {["name", "email", "department", "marks"].map((field) => (
          <div key={field} style={{ marginBottom: "12px" }}>
            <label>
              {field.charAt(0).toUpperCase() + field.slice(1)}{" "}
              <input
                name={field}
                type={field === "marks" ? "number" : "text"}
                value={form[field]}
                onChange={handleChange}
                required
                min={field === "marks" ? 0 : undefined}
                max={field === "marks" ? 100 : undefined}
              />
            </label>
            {fieldErrors[field] && (
              <div style={{ color: "red", marginTop: "4px" }}>
                {String(fieldErrors[field])}
              </div>
            )}
          </div>
        ))}
        <button type="submit">Add Student</button>
      </form>
      {message && (
        <p
          style={{
            color: fieldErrors.email ||
              fieldErrors.name ||
              fieldErrors.department ||
              fieldErrors.marks
              ? "red"
              : "black",
          }}
        >
          {message}
        </p>
      )}
      <h3>Student List</h3>
      <input
        type="text"
        placeholder="Search students by name..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {loading && <p>Loading...</p>}
      {!loading && error && (
        <p style={{ color: "red" }}>Error: {error}</p>
      )}
      {!loading && !error && students.length === 0 && (
        <p>No students found</p>
      )}
      {!loading && !error && students.length > 0 && (
        <table
          border="1"
          cellPadding="8"
          style={{
            marginTop: "16px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Marks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.department}</td>
                <td>{student.marks}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
export default Q17;
