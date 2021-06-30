const mongoose = require('mongoose');


// define schema for task document
var TaskSchema = mongoose.Schema({
    description: {
        type: String,
        default: '',
        maxLength: 140
    },
    expiration: {
        type: Date
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});


// export function to create model class
module.exports = mongoose.model('Tasks', TaskSchema);