import express from "express";
import "dotenv/config";
const PORT = process.env.PORT || 8000;
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
