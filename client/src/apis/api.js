import axios from "axios";

const API = axios.create({
    baseURL: "/api",  // proxy will redirect to localhost:5000
})


export const getTasks = () => API.get("/tasks");
export const createTask = (taskData) => API.post("/tasks", taskData); 
export const getTaskById = (id) => API.get(`/tasks/${id}`);