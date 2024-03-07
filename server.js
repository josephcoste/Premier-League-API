import connection from "./db/connections.js";
import routes from "./routes/index.js";
import express from "express";
import cors from "cors";
import logger from "morgan";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/api", routes);

connection.on("connected", () => {
  console.clear();
  console.log("connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`express server is running on port ${PORT}`);
  });
});
