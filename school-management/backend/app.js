const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

let students = [];

//create new students
app.post('/new-student', (req, res) => {
  const { name, dateOfBerth, gpa } = req.body;

  students.push({
    id: students.length + 1,
    name,
    dateOfBerth,
    gpa,
    registrationDate: new Date().toLocaleDateString()
  });
  res.status(201).json({ message: 'user creation success' });
});

//get all students
app.get('/students', (req, res) => {
  res.json(students);
});

//edit student
app.put('/edit-student', (req, res) => {
  const { id, name, dateOfBerth, gpa } = req.body;

  let student = students.find((student) => student.id == id);

  if (!student) {
    res.status(404).json({ message: 'student not found!' });
    return;
  }

  student.name = name;
  student.dateOfBerth = dateOfBerth;
  student.gpa = gpa;

  res.json({ message: 'update student success' });
});

//delete student
app.delete('/delete-student/:id', (req, res) => {
  students = students.filter((student) => student.id != req.params.id);

  res.json({ message: 'student remove success' });
});

app.listen(3001, () => console.log(`Server is running...`));
