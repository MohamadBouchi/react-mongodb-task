const express = require('express');
const bodyParser = require('body-parser');
const graphQlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require ('mongoose');
const Task = require('./models/tasks');
const User = require('./models/users');
const cors = require ('cors')
const app = express();
app.use(bodyParser.json(), cors());
// const conn = mongoose.connect('mongodb://localhost:27017/ToDo', { useNewUrlParser: true }).then(() => {
//     app.listen(3001);
//     console.log("connected");
// }).catch( err => {
//     console.log(err);
// });
const conn = mongoose.connect('mongodb+srv://ToDoUser:2vU46VcaTsmSE557@cluster0-autbo.mongodb.net/ToDo?retryWrites=true', { useNewUrlParser: true }).then(() => {
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


        type User {
            _id: ID!
            userName: String!
            firstName: String!
            lastName: String!
            email: String!
            password: String!
            userType: String!
        }

        input UserInput {
            userName: String!
            firstName: String!
            lastName: String!
            email: String!
            password: String!
            userType: String!
        }


        type RootQuery {
            tasks: [Task!]!
            users: [User!]!
        }

        type RootMutation {
            createTask(taskInput: TaskInput): Task
            createUser(userInput: UserInput): User
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
        users: () => {
            return User.find()
            .then(users => {
                return users.map(user=>{
                    return { ...user._doc, _id: user.id }
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
                // console.log(res);
                return { ...res._doc, _id: task._doc._id.toString() };
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
        },
        createUser: (args) => {
            const user = new User({
                userName: args.userInput.userName,
                firstName: args.userInput.firstName,
                lastName: args.userInput.lastName,
                email: args.userInput.email,
                userType: args.userInput.userType,
                password: args.userInput.password
            });
            return user.save()
            .then(res => {
                return { ...res._doc, _id: user._doc._id.toString() };
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
        }
    },
    graphiql: true
}));
