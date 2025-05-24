import { getAllVideos } from "../db/queries.js"
import fetch from 'node-fetch'

const fetchAllVideos = async (req, res) => {
  try {
    const rows = await getAllVideos();

    const videoList = await Promise.all(rows.map(async (video) => {
      const videoResponse = await fetch(`http://host.docker.internal:5005/api/filesystem/video/${video.video_name}`);
      if (videoResponse.ok) {
        return {
          video_name: video.video_name,
          video_url: `http://localhost:5005/api/filesystem/video/${video.video_name}`
        };
      }
      return null;
    }));

    res.json(videoList.filter(video => video !== null));
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).send('Internal Server Error');
  }
};

export { fetchAllVideos }