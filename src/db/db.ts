import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function Connection(): Promise<void> {
  try {
    //console.log(process.env.MONGODB_URI);

    const conn = await mongoose.connect(process.env.MONGODB_URI as string);

    console.log("Connected!");
    console.log(conn.connection.host);
  } catch (err) {
    console.error(err);
  }
}

export default Connection
