const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const user1Id = new mongoose.Types.ObjectId()
const user1 = {
    _id: user1Id,
    name: 'demo1',
    email: 'demo@example.com',
    password: 'demoPass',
    tokens: [{
        token: jwt.sign({ _id: user1Id}, process.env.JWT_SECRET)
    }]
}

const user2Id = new mongoose.Types.ObjectId()
const user2 = {
    _id: user2Id,
    name: 'demo2',
    email: 'demo2@example.com',
    password: 'demo2Pass',
    tokens: [{
        token: jwt.sign({ _id: user2Id}, process.env.JWT_SECRET)
    }]
}

const task1 = {
    _id: new mongoose.Types.ObjectId(),
    description: 'first task',
    completed: false,
    owner: user1Id
}

const task2 = {
    _id: new mongoose.Types.ObjectId(),
    description: 'second task',
    completed: true,
    owner: user1Id
}

const task3 = {
    _id: new mongoose.Types.ObjectId(),
    description: 'third task',
    completed: false,
    owner: user2Id
}

const setupTestDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(user1).save()
    await new User(user2).save()
    await new Task(task1).save()
    await new Task(task2).save()
    await new Task(task3).save()
}

module.exports = {
    user1,
    user1Id,
    user2,
    user2Id,
    task1,
    task2,
    task3,
    setupTestDatabase
}