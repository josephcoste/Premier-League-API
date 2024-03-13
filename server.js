import connection from "./db/connections.js";
import routes from "./routes/index.js";
import express from "express";
import cors from "cors";
import logger from "morgan";

const app = express();

// DEFINE PORT
const PORT = process.env.PORT|| 3000;

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(logger("dev")); // only add if you use morgan

// MOUNNT ROUTES -- PREPEND ALL ROUTES WITH /whatever-you-want
app.use("/api", routes);

// CONNECT TO DATABASE
db.on("connected", () => {
  console.clear();
  console.log(chalk.blue("Connected to MongoDB!")); //delete chalk.blue if you aren't using chalk

  // SET UP SERVER TO LISTEN FOR REQUESTS ON PORT
  app.listen(PORT, () => {
    process.env.NODE_ENV === "production"
      ? console.log(`Express server running in production on port ${PORT}`)
      : console.log(`Express server running in development on: ${PORT}`);
  });
});