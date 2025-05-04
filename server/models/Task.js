const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    
    description: String,
    assignedTo: String,
    status: {
        type: String,
        enum: ['todo', 'in-progress', 'done'],
        default: 'todo'
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
});

module.exports = mongoose.model("Task", TaskSchema);