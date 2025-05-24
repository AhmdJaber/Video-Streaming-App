import path from 'path';
import { fileURLToPath } from 'url';
import {add} from "../db/queries.js"
import { connectToDatabase } from "../db/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let video_name = "none_name"; 

const uploadVideo = async (req, res) => { 
    console.log('Request body:', req.body);  
    const { videoName }  = req.body;
    video_name = videoName; 
    
    if (!video_name) {
        throw res.status(400).send('No video name provided');
    }
    
    console.log('Received video name:', video_name);

    const video_path = `/mnt/filesystem`;
    try{
        const createVideo = add(video_name, video_path); 
        return res.status(201).json({createVideo}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error occurred"}); 
    }
}

const fetchCurrentName = async (req, res)=>{
    res.send(video_name); 
}

const check_auth = (req, res) => {
    const data = "upload"; 
    res.redirect(`http://localhost:5000/api/auth?originalData=${encodeURIComponent(data)}`);
}

const renderHTML = (req, res) => {
    connectToDatabase(); 
    res.sendFile(path.join(__dirname, '../routes/index.html'));
}

export {uploadVideo, fetchCurrentName, check_auth, renderHTML}
