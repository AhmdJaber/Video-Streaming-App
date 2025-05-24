import {Router} from "express"; 
import path from 'path';
import { fileURLToPath } from 'url';
import {fetchAllVideos} from "../handlers/index.js";
import { connectToDatabase } from "../db/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appRouter = Router(); 

appRouter.get('/allVideos', fetchAllVideos);

appRouter.get("/", (req, res) => {
    const data = "stream"; 
    res.redirect(`http://localhost:5000/api/auth?originalData=${encodeURIComponent(data)}`);
})

appRouter.get("/success", (req, res) => {
    connectToDatabase(); 
    res.sendFile(path.join(__dirname, 'index.html'));
})

export {appRouter}; 
