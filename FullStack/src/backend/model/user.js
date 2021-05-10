import { Schema, model } from "mongoose";

const UserSchema = Schema({
  name: {
    type: String,
    required: false,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  permissions: {
    type: String,
    required: false,
  },
});
export default model('Users',UserSchema)