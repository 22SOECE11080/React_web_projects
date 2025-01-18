const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send(`Hello world in port ${port}!`));
app.get("/student", (req, res) => res.send(`RJ`));
app.get("/university", (req, res) => res.send(`uni`));
app.get("/collage", (req, res) => res.send(`mon`));
app.listen(port, () => console.log(`Example app is online on ${port}!`));

// create end point / stident name display , /university diaplay university name , / collage to sisplay collage name.
// create end points to perfoem crud operatiom 1. enroll 2. name 3. branch 4.semester 5.Division 6.roll no 