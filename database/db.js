import mongoose from "mongoose";

const dbURL = "mongodb://tiwari7309651657:XBx017ZgiotHxl7X@cluster0-shard-00-00.th1i0.mongodb.net:27017,cluster0-shard-00-01.th1i0.mongodb.net:27017,cluster0-shard-00-02.th1i0.mongodb.net:27017/?replicaSet=atlas-6rjj8m-shard-0&ssl=true&authSource=admin";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(dbURL);
        console.log("Connected to MongoDB");
       
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

export default connectDB;
