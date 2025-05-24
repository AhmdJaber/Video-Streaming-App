import { config } from "dotenv";
import { createPool } from "mysql2/promise"; 
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config(); 

let dataStore = {}; 

const checkAuth = async (req, res) => {
    console.log('Request body:', req.body);  
    const { user, pass }= req.body; 
    
    const conn = createPool({
        port: process.env.MYSQL_PORT, 
        host: process.env.MYSQL_HOST, 
        user: user, 
        password: pass, 
        database: process.env.MYSQL_DATABASE_NAME, 
    });
    
    try {
        await conn.getConnection(); 
        console.log("MySQL Connection Success.");
        res.status(200).json({ success: true }); 
    } catch (error) {
        console.log(error); 
        res.status(401).json({ Failed: "Incorrect username or password" });
    }
}

const saveData = async (req, res) => {
    const { username, password } = req.body;
    dataStore = { username, password };
}

const getData = async (req, res) => {
    res.json(dataStore);
}

const renderHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../routes/index.html'));
}

export {checkAuth, saveData, getData, renderHTML}; 
