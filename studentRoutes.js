const express = require("express");
const router = express.Router();
const students = require("../data/students");

// GET /students - view all students
router.get("/", (req, res) => {
  return res.status(200).json(students);
});

// GET /students/:id - view one student
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((item) => item.id === id);

  if (!Number.isInteger(id) || !student) {
    return res.status(404).json({ message: "Student not found" });
  }

  return res.status(200).json(student);
});

// POST /students - add a student
router.post("/", (req, res) => {
  const { name, age, course } = req.body;

  if (
    typeof name !== "string" ||
    name.trim() === "" ||
    !Number.isInteger(Number(age)) ||
    Number(age) <= 0 ||
    typeof course !== "string" ||
    course.trim() === ""
  ) {
    return res.status(400).json({
      message: "Provide a non-empty name, positive age, and non-empty course"
    });
  }

  const nextId = students.length
    ? Math.max(...students.map((student) => student.id)) + 1
    : 1;

  const newStudent = {
    id: nextId,
    name: name.trim(),
    age: Number(age),
    course: course.trim()
  };

  students.push(newStudent);
  return res.status(201).json(newStudent);
});

// PUT /students/:id - update a student
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((item) => item.id === id);

  if (!Number.isInteger(id) || !student) {
    return res.status(404).json({ message: "Student not found" });
  }

  const { name, age, course } = req.body;

  if (
    typeof name !== "string" ||
    name.trim() === "" ||
    !Number.isInteger(Number(age)) ||
    Number(age) <= 0 ||
    typeof course !== "string" ||
    course.trim() === ""
  ) {
    return res.status(400).json({
      message: "Provide a non-empty name, positive age, and non-empty course"
    });
  }

  student.name = name.trim();
  student.age = Number(age);
  student.course = course.trim();

  return res.status(200).json(student);
});

// DELETE /students/:id - delete a student
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = students.findIndex((item) => item.id === id);

  if (!Number.isInteger(id) || index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  const deletedStudent = students.splice(index, 1)[0];
  return res.status(200).json({
    message: "Student deleted successfully",
    student: deletedStudent
  });
});

module.exports = router;
