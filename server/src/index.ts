import express, { Application, Response, Request } from "express";
import "dotenv/config";

const PORT = process.env.PORT || 8000;
const app: Application = express();
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
app.get("/", (req: Request, res: Response) => {
  res.render("welcome")
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
