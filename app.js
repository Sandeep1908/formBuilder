  
import express from "express";
import cors from 'cors'
import path from 'path'
import categorizeRoute from './routes/categorize.route.js'
import clozeRoute from './routes/cloze.route.js'
import comprehensiveRoute from './routes/comprehensive.route.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.static(path.join(__dirname, "./client/build")));
 


//Routes

app.use('/api',categorizeRoute)
app.use('/api',clozeRoute)
app.use('/api',comprehensiveRoute)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


export {app}