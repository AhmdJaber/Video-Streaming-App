import express from "express";
import { appRouter } from "./routes/index.js";
import { config } from "dotenv";

config(); 

const app = express();

app.use(express.json());

app.use("/api/filesystem", appRouter); 

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("The server is open at the port:", PORT);
}); 