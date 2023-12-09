import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import router from './Routes/IndexRoutes.js';

const app=express();
app.use(express.json())
dotenv.config();
const port=4000;
app.use("/api/v1",router)
mongoose.connect("mongodb+srv://reshmasawant325:qIWED55KFHpyuKsP@cluster0.knontmi.mongodb.net/tasks").then(()=>console.log("User Database is Connected"));
app.listen(port,console.log(`Server running on ${port}`));



/*User Microservices:

Create a user in user microservice with the info 
{ 
username, 
email, 
type // default user and admin 
}

Functions:
Admin should be able to add/delete users.
Default users should be able to fetch their own information only.
Task Management Microservice:
Create a task struct with the following fields:
Title
Description
Priority
Due date
completed
Functions:
Admins should be able to create/edit tasks.
Admins should be able to search for tasks and sort them by completion status, due date, and priority.
Users should only be able to fetch their own tasks and mark them as complete
Admin can assign task to user */






