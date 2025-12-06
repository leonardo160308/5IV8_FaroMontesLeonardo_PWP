import { saveGame } from "../models/gameModel.js";

export const guardarPartida = (req, res) => {

    const datos = {
        jugador: req.body.jugador,
        resultado: req.body.resultado,
        score: req.body.score
    };

    saveGame(datos, (err) => {
        if (err) res.status(500).json({ msg:"error", err });
        else res.json({ msg:"Guardado correctamente" });
    });
};
