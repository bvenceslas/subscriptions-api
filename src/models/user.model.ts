import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
});

export const Email = model("Email", userSchema);