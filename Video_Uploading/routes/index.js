import {Router} from "express"; 
import {uploadVideo, fetchCurrentName, check_auth, renderHTML} from "../handlers/index.js";

const appRouter = Router(); 

appRouter.post('/save_video', uploadVideo);

appRouter.get("/", check_auth)

appRouter.get("/success", renderHTML)

appRouter.get("/getCurrentName", fetchCurrentName)

export {appRouter}; 