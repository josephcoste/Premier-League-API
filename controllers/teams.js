import Team from "../models/Teams.js";

export const getTeams = async (req, res) => {
  try {
    const team = await Team.find();
    res.json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id)

    if (team) {
      return res.json(team);
    }

    res.status(404).json({ message: "Team not found" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createTeam = async (req, res) => {
  const team = new Team(req.body);
  await team.save();
  res.status(201).json(team);
};

export const updateTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Team.findByIdAndUpdate(id, req.body);
    res.status().json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Team.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send(" Team deleted!");
    }

    throw new Error("Team not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};