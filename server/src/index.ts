import express, { Application, Response, Request } from "express";
import "dotenv/config";

const PORT = process.env.PORT || 8000;
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

