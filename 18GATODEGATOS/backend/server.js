import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import gameRoutes from "./routes/gameRoutes.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../Frontend/public")));

app.use("/api", gameRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("🔥 Servidor ON en puerto", process.env.PORT || 3000);
});
