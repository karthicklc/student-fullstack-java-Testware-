const BASE_URL = import.meta.env.VITE_API_URL;
export async function getJson(url) {
  const response = await fetch(url);
  const text = await response.text();
  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  if (!response.ok) {
    let message;
    if (typeof data === "string") {
      message = data || response.statusText;
    } else {
      message =
        data?.error ||
        data?.message ||
        response.statusText ||
        "Request failed";
    }
    throw new Error(`HTTP ${response.status}: ${message}`);
  }
  return data;
}
export async function getStudent(id) {
  return getJson(`${BASE_URL}/api/students/${id}`);
}
