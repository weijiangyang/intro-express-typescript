import express from 'express';
import dotenv from 'dotenv';
import userRouter from "./router/user.router";

const app = express();

dotenv.config();
const port = process.env.PORT;
app.use('/user',userRouter);
app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
    
})
/**
 * GET user -> 
 * GET user/id
 */