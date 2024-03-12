import mongoose from "mongoose";

const Schema = mongoose.Schema;

let TeamSchema = new Schema({
         name:  { type: String } ,
       ranking: { type: Number },
       captain: { type: String },
       banner:  { type: String },
       founded: { type: Number },
       stadium: { type: String }
});

export default mongoose.model("teams", TeamSchema);
