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



export default app; 