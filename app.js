const express = require("express");
const path = require("path");
const { v4 } = require("uuid");
const app = express();

let CONTACTS = [
  {
    id: v4(),
    name: "Влад",
    value: "число 42",
    marked: false,
  },
];

app.use(express.json());

app.get("/api/contacts", (req, res) => {
  res.status(200).json(CONTACTS);
});

app.post("/api/contacts", (req, res) => {
  const contact = { ...req.body, id: v4(), marked: false };
  CONTACTS.push(contact);

  res.status(201).json(CONTACTS);
});

app.delete("/api/contacts/:id", (req, res) => {
  CONTACTS = CONTACTS.filter((element) => element.id !== req.params.id);

  res.status(200).json({ message: "Контакт был удалён" });
});

/************************************************ */
app.use(express.static(path.relative(__dirname, "client")));

app.get("*", (req, res) => {
  res.sendFile(path.relative(__dirname, "client", "index.html"));
});

app.listen(3000, () => {
  console.log(`Server has been started on port 3000...`);
});
