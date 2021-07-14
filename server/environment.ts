/**
 * The server should consume all environment variables through this file.
 */
 import dotenv from 'dotenv';
 dotenv.config();
 
 const env = {
     PUBLIC_URL: process.env.PUBLIC_URL || '/gotham/',
     PORT: process.env.PORT ? Number(process.env.PORT) : 8000
 };
 
 export default env;
 