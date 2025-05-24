import {Router} from "express"; 
import {checkAuth, getData, renderHTML, saveData} from "../handlers/index.js";

const appRouter = Router(); 

appRouter.post('/save', saveData); 

appRouter.get('/get', getData); 

appRouter.post('/login', checkAuth);

appRouter.get("/", renderHTML)

export {appRouter}; 
