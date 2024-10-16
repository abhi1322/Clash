import express from "express";
import "dotenv/config";
import ejs from "ejs";
const PORT = process.env.PORT || 8000;
const app = express();
import path from "path";
import { fileURLToPath } from "url";
// Queue
import "./jobs/index.js";
import { emailQueue, emailQueueName } from "./jobs/EmailJob.js";
import Routes from "./routes/index.js";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
// * Routes
app.use(Routes);
app.get("/", async (req, res) => {
    const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, {
        name: "Abhishek kumar",
    });
    // await sendEmail("meyop59384@skrank.com", "Testing my SMTP", html);
    await emailQueue.add(emailQueueName, {
        to: "meyop59384@skrank.com",
        subject: "Testing my SMTP",
        body: html,
    });
    res.json({ message: "Email sent successfully" });
});
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
