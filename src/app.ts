import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoutes } from "./app/modules/user/user.routes";



const app: Application = express();
app.use(cors());

// parser:
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.post("/",(req:Request,res:Response)=>{
    res.send({
        message: "Backend is running",
    })
})

app.use('/api/v1/user',userRoutes);



export default app;