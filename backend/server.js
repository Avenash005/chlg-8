const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fetch = require("node-fetch");

dotenv.config();

const app = express();
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// AI Route
app.post("/generate", async (req, res) => {
  try {
    const { input } = req.body;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `Write a professional GitHub PR description for this:\n${input}`
          }
        ]
      })
    });

    const data = await response.json();

    res.json({ result: data.choices[0].message.content });

  } catch (err) {
    res.status(500).json({ error: "Failed to generate" });
  }
});

app.listen(3000, () => console.log("Server running on 3000"));