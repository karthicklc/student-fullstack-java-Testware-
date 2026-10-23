import axios from "axios";
const api = axios.create({baseURL: import.meta.env.VITE_API_URL
});
export const getStudents = async () => {
  const response = await api.get("/api/students");
  return response.data;
};
export const addStudent = async (student) => {
  const response = await api.post("/api/students", student);
  return response.data;
};
export const deleteStudent = async (id) => {
  await api.delete(`/api/students/${id}`);
};
export default api;
