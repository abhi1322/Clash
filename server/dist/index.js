import express from "express";
import "dotenv/config";
const PORT = process.env.PORT || 8000;
const app = express();
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
// routes
app.get("/", (req, res) => {
    res.render("welcome");
});
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
