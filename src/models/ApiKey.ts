import { Schema, model } from "mongoose";

const ApiKeySchema = new Schema({
  hashedKey: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  purpose: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default model("ApiKey", ApiKeySchema, "apikeys");
