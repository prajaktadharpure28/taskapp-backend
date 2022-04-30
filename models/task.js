const mongoose = require('mongoose');

const Task = new mongoose.Schema({
    title: {type: 'string'},
    discription: {type: 'string'},
    status: {type: 'string'},
});

const model = mongoose.model('Task',Task);

module.exports = model;