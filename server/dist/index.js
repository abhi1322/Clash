import express from "express";
import "dotenv/config";
import ejs from "ejs";
const PORT = process.env.PORT || 8000;
const app = express();
import path from "path";
import { fileURLToPath } from "url";
import { sendEmail } from "./config/mail.js";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
// routes
app.get("/", async (req, res) => {
    const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, {
        name: "Abhishek kumar",
    });
    await sendEmail("meyop59384@skrank.com", "Testing my SMTP", html);
    res.json({ message: "Email sent successfully" });
    // res.render("emails/welcome", { name: "Abhishek Kumar" });/
});
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
