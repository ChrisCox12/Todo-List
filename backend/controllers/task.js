const Task = require('../models/task_schema');


const taskController = {
    async getAll(request, response) {
        try {
            let tasks = await Task.find();
            response.status(200).json(tasks);
        }
        catch (err) {
            response.json({ message: err });
        }
    },
    async byId(request, response) {
        try{
            let task = await Task.findById(request.params.id);
            response.status(200).json(task);
        }
        catch(err){
            response.json({message: err});
        }
    },
    async createTask(request, response) {
        let task = request.body;
        let newTask = new Task(task);

        try {
            let savedTask = await newTask.save();
            response.status(200).json(savedTask);
        }
        catch (err) {
            response.json({ message: err });
        }
    },
    async editTask(request, response) {
        let updates = {
            description: request.body.description,
            expiration: request.body.expiration
        };

        try {
            await Task.findByIdAndUpdate(
                request.params.id,
                updates,
                { useFindAndModify: false }
            );

            let updatedTask = await Task.findById(request.params.id);
            response.status(200).json(updatedTask);
        }
        catch (err) {
            response.json({ mmessage: err });
        }
    },
    async deleteTask(request, response) {
        try {
            response.status(200).json( await Task.findByIdAndDelete(request.params.id) );
        }
        catch (err) {
            response.json({ message: err });
        }
    }
};


module.exports = taskController;