import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
  image: {
    type: String,
  },
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);

