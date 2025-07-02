import mongoose, { Schema, Document } from "mongoose";
export interface IImages extends Document {
  gameImage: string;
}
const ImagesSchema = new Schema<IImages>({
  gameImage: { type: String, required: true },
});
export default mongoose.model<IImages>("Images", ImagesSchema);
