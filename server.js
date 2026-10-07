import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname))); 

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/ask", (req, res) => {
    const question = String(req.body.question || "").trim();

    if (!question) {
        return res.status(400).json({
            error: "Please enter a question."
        });
    }

    res.json({
        answer:
            "FarmMate is working! 🌾 Your question was received: " +
            question
    });
});

export default app;  