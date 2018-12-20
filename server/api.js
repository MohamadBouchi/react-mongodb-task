const express = require('express');
const bodyParser = require('body-parser');
const graphQlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require ('mongoose');
const Task = require('./models/tasks');

const app = express();
app.use(bodyParser.json());
const conn = mongoose.connect('mongodb://localhost:27017/ToDo', { useNewUrlParser: true }).then(() => {
    app.listen(3001);
    console.log("connected");
}).catch( err => {
    console.log(err);
});

app.use('/graphql', graphQlHttp({
    schema: buildSchema(`
        type Task {
            _id: ID!
            title: String!
            description: String!
            date: String!
        }

        input TaskInput {
            title: String!
            description: String!
            date: String!
        }

        type RootQuery {
            tasks: [Task!]!
        }

        type RootMutation {
            createTask(taskInput: TaskInput): Task
        }
        schema {
            query: RootQuery 
            mutation: RootMutation
        }
    `),
    rootValue: {
        tasks: () => {
            return Task.find()
            .then(tasks => {
                return tasks.map(task=>{
                    return { ...task._doc, _id: task.id }
                });
            })
            .catch(err => {
                throw err;
            });
        },
        createTask: (args) => {
            const task = new Task({
                title: args.taskInput.title,
                description: args.taskInput.description,
                date: new Date(args.taskInput.date)
            });
            return task.save()
            .then(res => {
                console.log(res);
                return { ...res._doc, _id: task._doc._id.toString() };
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
        }
    },
    graphiql: true
}));
