// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'; // Make sure your styling is included
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail'; // Import TaskDetail to navigate

function App() {
  return (
    <Router>
      <div style={{ padding: "1rem" }}>
        <h1>Hackathon Task Manager</h1>
        <Routes>
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/tasks/:id" element={<TaskDetail />} /> {/* Add the task detail route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
