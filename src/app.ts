import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoutes } from "./app/modules/user/user.routes";
import { AdminRoutes } from "./app/modules/Admin/admin.routes";



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
app.use('/api/v1/admin',AdminRoutes);



export default app;