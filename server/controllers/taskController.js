const Task = require('../models/Task')

exports.createTask = async (req, res) => {
    try {
      console.log("🔧 Incoming task data:", req.body);
  
      const { title, description, assignedTo, status } = req.body;
  
      if (!title || !description || !assignedTo || !status) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      const task = await Task.create({ title, description, assignedTo, status });
      res.status(201).json(task);
    } catch (error) {
      console.error("❌ Error creating task:", error.message);
      res.status(500).json({ error: error.message });
    }
  };
  

exports.getAllTasks = async(req, res) => {
    try{
        const task = await Task.find();
        res.json(task);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
};

exports.getTaskById = async(req, res) => {
    try{
        const task = await Task.findById(req.params.id);

        if(!task){
            return res.status(404)
                .json({ message: "Task not found." });
        }

        res.json(task);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
};

exports.updateTask = async(req, res) => {
    try{
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if(!updatedTask){
            return res.status(404).json({ message: "Task not found." });
        }

        res.json(updatedTask);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTask = async(req, res) => {
    try{
        const deletedTask = await Task.findByIdAndDelete(req.params.id);

        if(!deletedTask){
            return res.status(404).json({ message: "Task not found" });
        }
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}