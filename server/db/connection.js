import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        // console.log("MongoDB connecting...",process.env.MONGO_URI);
        await mongoose.connect("mongodb://localhost:27017/crud_adv");
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

export default connectDB;
