 import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("."));

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

app.listen(3000, () => {
    console.log("🌾 FarmMate running at http://localhost:3000");
});