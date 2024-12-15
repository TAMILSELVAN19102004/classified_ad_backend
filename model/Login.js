import mongoose, { Schema } from "mongoose";
const loginSchema = new Schema({
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
});

export const Login = mongoose.model("Login", loginSchema,"login");
