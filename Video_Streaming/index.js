import express from "express";
import { appRouter } from "./routes/index.js";
import cors from "cors"; 

const app = express();

app.use(cors({
    origin: '*', 
}));

app.use(express.json());

app.use("/api/stream", appRouter); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("The server is open at the port:", PORT);
}); 
