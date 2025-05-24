import { conn } from "./index.js";

export const getAllVideos = async () => {
    const QUERY = `SELECT video_name, video_path FROM video_info`; 
    try {
        const client = await conn.getConnection(); 
        const result = await client.query(QUERY); 
        return result[0]; 
    } catch (error) {
        throw error; 
    }
}; 