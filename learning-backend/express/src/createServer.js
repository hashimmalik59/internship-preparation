import express from "express";

const app = express();

app.use(express.json());

const students = [];

app.post("/students", (req, res) => {
  students.push(req.body);

  res.status(201).json({
    message: "student data is created successfully",
  });
});

app.get("/students", (req, res) => {
  res.status(200).json({
    message: "students data is fetched successfully",
    students: students,
  });
});

app.delete("/students/:index", (req, res) => {
  const index = req.params.index;

  delete students[index];

  res.status(200).json({
    message: "student data is deleted successfully",
  });
});

app.patch("/students/:index", (req, res) => {
  const index = req.params.index;

  const name = req.body.name;

  students[index].name = name;

  res.status(200).json({
    message: "student data is updated successfully",
  });
});

export default app;
