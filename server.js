import 'dotenv/config'
import { app } from './app.js'
import connectDB from './config/config.js'
 

const PORT = process.env.PORT || 5000

connectDB()
    .then(() => {
        app.listen(PORT || 5000, () => {
            console.log(`Server is running at port : ${PORT}`);
        })
    })
    .catch((err) => {
        console.log('MONGODB connection ERRR  !!!', err);
    })