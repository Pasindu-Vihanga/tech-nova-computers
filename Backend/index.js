import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken";
import productRouter from "./routes/productRouter.js";


const mongoURL = "mongodb+srv://admin:1234@cluster0.feaigzn.mongodb.net/skyrek2?appName=Cluster0"
mongoose.connect(mongoURL).then(
    ()=>{
        console.log("Connected to MongoDB Cluster")
    }
)

const app = express()

app.use(express.json())

app.use(
(req, res, next)=>{

    const authorizationHeader = req.header("authorization")

    if(authorizationHeader != null){

        const token = authorizationHeader.replace("Bearer ","")

        jwt.verify(token, "secretKey96$2025",
            (err, content)=>{

                if(content == null){
                    console.log("invalid token")

                    res.json({
                        message : "Invalid token"
                    })

               

                }else{
                    console.log(content)
                    req.user = content
                    next()

                }
            }
        )

    }else{
        next()
    }
    

})



app.use("/users",userRouter)
app.use("/products",productRouter)


app.listen(5000,
    ()=>{
        console.log("Server is running")
    }
)

