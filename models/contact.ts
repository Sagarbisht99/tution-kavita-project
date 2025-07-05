// models/Contact.ts
import { Schema, model, models } from "mongoose";

const ContactSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    subject: {
      type: String,
      required: true,
      enum: ["All Subjects", "Math", "Science", "SST", "English", "Hindi"],
    },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const Contact = models.Contact || model("Contact", ContactSchema);
