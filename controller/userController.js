import express from "express";
import bodyParser from "body-parser";
import { users } from "../model/index.js";


const userRouter = express.Router()
//fetch users
userRouter.get('/', (req, res)=>{
    try {
        users.fetchUsers(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "An error occured while trying to fetch users"
        })
    }
})
// fetch a single user
userRouter.get('/:id', (req, res)=>{
    try {
        users.fetchUser(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to retrieve this user"
        })
    }
})
// delete a single user
userRouter.delete('/delete/:id', bodyParser.json(), (req, res)=>{
    try {
        users.deleteUser(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Deleted this user"
        })
    }
})
// update a single user
userRouter.patch('/update/:id', bodyParser.json(), (req, res)=>{
    try {
        users.updateUser(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Updated this user"
        })
    }
})
userRouter.post('/register', bodyParser.json(), (req, res)=>{
    try {
        users.createUser(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to add a new user"
        })
    }
})
userRouter.post('/login', bodyParser.json(), (req,res)=>{
    try {
        users.login(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to log in"
        })
    }
})

export{
    userRouter, express
}