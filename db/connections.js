import mongoose from "mongoose";

mongoose.set("returnOriginal", false);

mongoose.connect("mongodb://127.0.0.1:27017/sports_api").catch((err) => {
  console.log(`error connection to MongoDB: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log();
});
export default mongoose.connection;
