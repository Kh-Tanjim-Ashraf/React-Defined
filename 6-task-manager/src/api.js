BASE_URL = "http://127.0.0.1:8080/";

// Get tasks | List
export async function getTasks() {
  const response = await fetch(BASE_URL + "tasks");
  if (!response.ok) {
    throw new Error("Couldn't fetch tasks");
  }
  return response.json();
}

// Post task | Create
export async function addTask(task) {
  const response = await fetch(BASE_URL + "tasks", {
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
}

// Delete task | Single
export async function deleteTask(id) {
  const response = await fetch(BASE_URL + id, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Couldn't delete task");
  }
  return response.json();
}
