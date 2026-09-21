const BASE_URL = "http://127.0.0.1:8080";

// Get tasks | List
export async function getTasks() {
  try {
    const response = await fetch(BASE_URL + "/tasks");
    if (!response.ok) {
      throw new Error("Couldn't fetch tasks");
    }
    return response.json();
  } catch (error) {
    if (error.name === "TypeError" && error.message.includes("fetch")) {
      console.error("Network Error: Server is unreachable or stopped!");
      throw new Error(
        "সার্ভারটি বর্তমানে বন্ধ আছে বা নেটওয়ার্ক সমস্যা। অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা করুন।",
      );
    }
    // Handle error other than the error of server is stopped/unreachable
    throw error;
  }
}

// Post task | Create
export async function addTask(task) {
  try {
    const response = await fetch(BASE_URL + "/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      throw new Error("Couldn't create task");
    }
    return response.json();
  } catch (error) {
    if (error.name === "TypeError" && error.message.includes("fetch")) {
      console.error("Network Error: Server is unreachable or stopped!");
      throw new Error(
        "সার্ভারটি বর্তমানে বন্ধ আছে বা নেটওয়ার্ক সমস্যা। অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা করুন।",
      );
    }
    // Handle error other than the error of server is stopped/unreachable
    throw error;
  }
}

// Delete task | Single
export async function deleteTask(id) {
  const response = await fetch(BASE_URL + `/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Couldn't delete task");
  }
  return response.json();
}
