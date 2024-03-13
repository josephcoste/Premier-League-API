import mongoose from "mongoose";

const connectionString =
  process.env.DB_URL || "mongodb://127.0.0.1:27017/sports_api";

// This is needed if you use Model.findByIdAndUpdate method, specifically so that {new: true} is the default
mongoose.set("returnOriginal", false);

mongoose
  .connect(connectionString)
  .catch((error) =>
    console.log("Error connecting to MongoDB: ", error.message)
  );

mongoose.connection.on("disconnected", () =>
  console.log("Disconnected from MongoDB!")
);

mongoose.connection.on("error", (error) =>
  console.error(`MongoDB connection error: ${error}`)
);

export default mongoose.connection;
