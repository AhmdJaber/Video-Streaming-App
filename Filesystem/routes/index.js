import {Router} from "express"; 
import multer from "multer"; 
import fs from "fs"; 
import { downloadVideo, fetchVideo, getCurrentVideoName} from "../handlers/index.js" 

const videoDir = '/mnt/filesystem'

if (!fs.existsSync(videoDir)) {
    fs.mkdirSync(videoDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, videoDir); 
    },
    
    filename: async (req, file, cb) => {
        console.log(file); 
        const videoName = await getCurrentVideoName();   
        cb(null, videoName);
    }
});

const upload = multer({storage: storage}); 

const appRouter = Router(); 

appRouter.post('/download', upload.single('video'), downloadVideo);

appRouter.get('/video/:name', fetchVideo);

export {appRouter}; 