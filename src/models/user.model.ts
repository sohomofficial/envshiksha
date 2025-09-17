import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  role: "student" | "teacher" | "admin"; //the bar here represents union type
  classGrp: "1-5" | "6-10" | "11-12" | "UG";
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      default: "student",
    },
    classGrp: {type: String, enum: ["1-5", "6-10", "11-12", "UG"], default: "1-5"},
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
