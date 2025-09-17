import mongoose, {Document, Schema} from "mongoose";

export interface IClassroom extends Document{
    name: String;
    class: String;
    createdBy: String;
    createdAt: Date;
    updatedAt: Date;
}

const ClassroomSchema: Schema<IClassroom> = new Schema({
    name: { type: String, required: true },
    class: {type: String},
    createdBy: {type: Schema.Types.ObjectId, ref: "User", required: true},
}, { timestamps: true });

const Classroom = mongoose.models.Classroom || mongoose.model<IClassroom>("Classroom", ClassroomSchema); 

export default Classroom;