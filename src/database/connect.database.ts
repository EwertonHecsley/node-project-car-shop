import 'dotenv/config';
import mongoose from 'mongoose';

const uri = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`;


const connecDataBase = async () => {
    try {
        await mongoose.connect(uri);
        console.log(`Database connected`);
    } catch (error) {
        console.error(`Error to connect database`, error);
    }
};

export { connecDataBase }
