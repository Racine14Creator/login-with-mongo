import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/express-mongo";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }
  const opt = {
    bufferCommands: false,
  };

  await mongoose.connect(MONGODB_URI, opt);
  return mongoose;
}

export default connectToDatabase;
