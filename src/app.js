import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))// for conversation between frontend and backend 

app.use(express.json({
    limit:"16kb"
}))// for limits the data that comes from body ssuch as FORMS, ETC

app.use(express.urlencoded({
    extended:true,// for nested objects
    limit:"16kb"
}))

app.use(express.static("public"))// thing needed to be public 

app.use(cookieParser())//for fetching and storing data in the browser of user

export {app};