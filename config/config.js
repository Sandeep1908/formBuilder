import mongoose from "mongoose";
const mongodbUri = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(mongodbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`
                    MongoDB Server connected to Backend Server : HOST ${connection.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


export default connectDB