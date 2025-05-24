import { createPool } from "mysql2/promise"; 
import { config } from "dotenv";

config(); 

let usernameDB; 
let passwordDB; 
let conn; 

const connectToDatabase = async () => {
    const response = await fetch('http://host.docker.internal:5000/api/auth/get');
    const data = await response.json();
    usernameDB = data.username; 
    passwordDB = data.password;
    console.log('Retrieved data:', data);

    conn = createPool({
        user: usernameDB, 
        password: passwordDB, 
        port: process.env.MYSQL_PORT, 
        host: process.env.MYSQL_HOST, 
        database: process.env.MYSQL_DATABASE_NAME, 
    });

    try {
        await conn.getConnection(); 
        console.log("MySQL Connection Success!"); 
    } catch (error) {
        console.log("Error while connecting to the MySQL DB!!!!!!"); 
        console.log(usernameDB, passwordDB); 
        throw error; 
    }
}; 

export {connectToDatabase, conn}; 