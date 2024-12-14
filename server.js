import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./database/db.js";
import itemrouter from "./routes/item.route.js";
// import itemrouter from "./routes/item.route.js";

const serverapp = express();
serverapp.use(cors());

dotenv.config();
serverapp.use(express.json());
serverapp.use(express.urlencoded({ extended: true }));

serverapp.use("/api",itemrouter);

connectDB();
const PORT = process.env.PORT || 3200;
serverapp.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
