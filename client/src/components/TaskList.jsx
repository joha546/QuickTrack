// src/components/TaskList.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { getTasks } from "../apis/api"; // Import API functions
import AddTaskForm from "./AddTaskForm";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tasks when component mounts
  useEffect(() => {
    getTasks()
      .then((res) => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tasks:", err);
        setLoading(false);
      });
  }, []);

  // Handle adding a new task
  const handleTaskAdded = (newTask) => {
    setTasks((prev) => [newTask, ...prev]); // Add the new task to the beginning of the list
  };

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div>
      <h2>Task List</h2>
      <AddTaskForm onTaskAdded={handleTaskAdded} /> {/* Add form component here */}

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task._id} style={{ marginBottom: "1rem" }}>
              <div>
                <strong>{task.title}</strong>
                <br />
                <em>{task.description}</em>
                <br />
                <small>Assigned to: {task.assignedTo} | Status: {task.status}</small>
                <br />
                {/* Link to TaskDetail component */}
                <Link to={`/tasks/${task._id}`}>View Details</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
