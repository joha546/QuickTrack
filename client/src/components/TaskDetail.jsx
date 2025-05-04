import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getTaskById } from "../apis/api";

export default function TaskDetail() {
    const { id } = useParams(); // Get task ID from URL
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchTask = async () => {
        try {
          const res = await getTaskById(id); // Fetch task details from API
          setTask(res.data); // Store task details in state
        } catch (err) {
          console.error("Error fetching task details:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchTask();
    }, [id]); // Re-run when task ID changes
  
    if (loading) return <p>Loading task...</p>;
    if (!task) return <p>Task not found.</p>;
  
    return (
      <div>
        <h2>{task.title}</h2>
        <p><strong>Description:</strong> {task.description}</p>
        <p><strong>Assigned To:</strong> {task.assignedTo}</p>
        <p><strong>Status:</strong> {task.status}</p>
      </div>
    );
}