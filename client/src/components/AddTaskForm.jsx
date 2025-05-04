// src/components/AddTaskForm.jsx

import { useState } from "react";
import { createTask } from "../apis/api";

export default function AddTaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); // new field
  const [assignedTo, setAssignedTo] = useState("");   // new field
  const [status, setStatus] = useState("todo");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 👇 Send full task object to backend
      const res = await createTask({ title, description, assignedTo, status });
      onTaskAdded(res.data);  // Notify parent to update task list
      // Reset form fields
      setTitle("");
      setDescription("");
      setAssignedTo("");
      setStatus("todo");
    } catch (err) {
      console.error("Error adding task:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Assigned To"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
        required
      />
      <br />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <br />
      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
}
