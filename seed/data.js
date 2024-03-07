import Team from "../models/Teams.js";
import db from "../db/connections.js";
import data from "./data.json" assert { type: "json" };


const insertData = async () => {
    await db.dropDatabase();

    await Team.create(data);

    console.log("Teams are created!");

    await db.close();
};

insertData();