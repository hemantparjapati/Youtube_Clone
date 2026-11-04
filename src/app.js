import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))//use for middelware things 

app.use(express.json({limit:"16kb"}))//read json request

app.use(express.urlencoded({extended:true , limit: "16kb"}))

app.use(express.static("public")) //server public folder files to client

app.use(cookieParser())// read cookie that come from request



///routes import

import userRouter from './routes/user.routes.js'


// routes declaration
// app.use("/users",userRouter)//router file me jo router define kiye hai ye usko express app ke sath connect krta hai
/* ex: http://localhost:8000/users/register 
     
    THIS IS USED BECAUSE IN FUTER IF ANY ROUTES COME IN USERS SO WE DON'T REWRITEEN ASGIN AND AGAINN
    EX:-
    - /api/v1/users/register
    - /api/v1/users/login
    - /api/v1/users/logout
    - /api/v1/users/profile

*/ 

app.use("/api/v1/users",userRouter)//this version is used in industries
// http://localhost:8000/api/v1/users/register


export default app; 