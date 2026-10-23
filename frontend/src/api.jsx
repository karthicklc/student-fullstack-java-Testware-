import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});
function handleError(err) {
  if (!err.response) {
    return "Server is not reachable";
  }
  if (err.response.status === 404) {
    return (
      err.response.data?.error ||
      err.response.data?.message ||
      "Resource not found"
    );
  }
  if (err.response.status === 400) {
    return err.response.data;
  }
  return (
    err.response.data?.error ||
    err.response.data?.message ||
    `HTTP ${err.response.status}`
  );
}
export async function getStudents() {
  try {
    const response = await api.get("/api/students");
    return response.data;
  } catch (err) {
    return handleError(err);
  }
}
export async function addStudent(student) {
  try {
    const response = await api.post("/api/students", student);
    return response.data;
  } catch (err) {
    return handleError(err);
  }
}
export async function deleteStudent(id) {
  try {
    await api.delete(`/api/students/${id}`);
    return "Student deleted successfully";
  } catch (err) {
    return handleError(err);
  }
}
export default api;
