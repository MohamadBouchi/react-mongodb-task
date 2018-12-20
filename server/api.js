const express = require('express');
const bodyParser = require('body-parser');
const graphQlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require ('mongoose');
const app = express();
const tasks = [];
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
            return tasks;
        },
        createTask: (args) => {
            const task = {
                _id: Math.random().toString(),
                title: args.taskInput.title,
                description: args.taskInput.description,
                date: args.taskInput.date
            };
            tasks.push(task);
            return task;
        }
    },
    graphiql: true
}));
