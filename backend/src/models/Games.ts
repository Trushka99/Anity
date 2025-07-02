import mongoose, { Schema, Document } from "mongoose";
export interface IGames extends Document {
  img: string;
  title: string;
  description: string;
  fulldescription: string;
}
const GameSchema = new Schema<IGames>({
  img: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  fulldescription: { type: String, required: true },
});
export default mongoose.model<IGames>("Game", GameSchema);
