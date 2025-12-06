import db from "../config/db.js";

export const saveGame = (data, result) => {
    db.query("INSERT INTO partidas SET ?", data, (err, res) => {
        if (err) result(err, null);
        else result(null, res);
    });
};
