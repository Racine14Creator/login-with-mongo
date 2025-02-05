import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Document {
  fullname: string;
  email: string;
  password?: string;
  id: string;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
  fullname: { type: String, required: true, min: 3, max: 50 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: 5 },
});

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
