  
import {Router} from 'express'
import teamsRoutes from "./teams.js"

const router = Router();

router.get("/", (req, res) => res.send("this is a api root!"));
 
router.use("/teams",teamsRoutes)

export default router;











