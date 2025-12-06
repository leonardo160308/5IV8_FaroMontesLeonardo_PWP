import { Router } from "express";
import { guardarPartida } from "../controllers/gameController.js";

const router = Router();

router.post("/save-game", guardarPartida);

export default router;
