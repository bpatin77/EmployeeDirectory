// TODO: this file :)
const express = require("express");
const employees = require("./employees");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello employees!"); // We use `res.send` to send strings
});

app.get("/employees", (req, res) => {
  res.json(employees); // We use `res.json` to send variables / objects / JS things
});

app.get("/employees/random", (req, res) => {
  const i = Math.floor(Math.random() * employees.length);
  res.json(employees[i]);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;

  // We need to convert `id` to a number when comparing it w/ the employee's ID
  const employee = employees.find((e) => e.id === +id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send(`There is no employee with id ${id}.`);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port #${PORT}`);
});
