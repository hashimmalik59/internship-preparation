import express from "express";

const app = express();

app.use(express.json());

const notes = [];

app.post("/notes", (req,res) => {
    notes.push(req.body);

    res.status(201).json({
        message: "note is created successfully"
    })
})

export default app;