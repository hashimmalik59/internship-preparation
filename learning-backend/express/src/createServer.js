import express from "express";

const app = express();

app.use(express.json())

const students = [];

app.post("/students", (req, res) => {
    console.log(req.body);

    students.push(req.body);

    res.status(201).json({
        message: "student created successdully"
    })
});

app.get("/students", (req, res) => {
    console.log(req.body);

    res.status(200).json({
        students: students,
        message: "student get successfully"
    })
})

app.delete("/students/:id", (req, res) => {
    console.log(req.body);

    const id = req.params.id;

    delete students[id];

    res.status(201).json({
        message: "student deleted successfully"
    })
})

app.patch("/students/:id", (req, res) => {
    console.log(req.body);

    const id = req.params.id;

    const name = req.body.name;
    const age = req.body.age;

    students[id].name = name;
    students[id].age = age;

    res.status(200).json({
        message: "student updated successfully"
    })
})

export default app;