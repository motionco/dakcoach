import mongoose from "mongoose";

const { Schema } = mongoose;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);
