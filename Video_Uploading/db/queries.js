import { conn } from "./index.js";

export const add = async (video_name, video_path) => {
    const QUERY = `INSERT INTO video_info
                (video_name, video_path)
                VALUES(?, ?)`; 
    try {
        const client = await conn.getConnection(); 
        const result = await client.query(QUERY, [video_name, video_path]); 
        console.log(result[0]);
        return result[0]; 
    } catch (error) {
        console.log("Error while adding video", error); 
        throw error; 
    }
}; 