import path from "path"

const videoDir = path.join('/mnt/filesystem');

const downloadVideo = async (req, res) => { 
    res.json("Uploaded Successfully!")
}

const fetchVideo = async (req, res) => {
    const videoPath = path.join(videoDir, req.params.name);
    res.sendFile(videoPath);
}

async function getCurrentVideoName() {
    try {
        const response = await fetch("http://host.docker.internal:5001/api/upload/getCurrentName");
        const data = await response.text();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export {downloadVideo, fetchVideo, getCurrentVideoName}