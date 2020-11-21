import express from "express";
import bodyParser from "body-parser";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./rsvps.db");

db.run(`CREATE TABLE IF NOT EXISTS rsvps (
	firstName TEXT NOT NULL,
	lastName TEXT NOT NULL
);`);

const app = express();
const port = 3000;

app.use(express.static("../wedding-client/public"));
app.use(bodyParser.json());

app.post("/rsvp", (req, res) => {
  const body: {
    firstName?: string;
    lastName?: string;
    plusOneFirstName?: string;
    plusOneLastName?: string;
  } = req.body;

  if (
    !body.firstName ||
    !body.lastName ||
    (body.plusOneFirstName && !body.plusOneLastName) ||
    (!body.plusOneFirstName && body.plusOneLastName)
  ) {
    res.status(422);
    res.send({
      error: "Invalid Body",
    });
    return;
  }

  try {
    db.run(
      `INSERT INTO rsvps(firstName, lastName) VALUES ($firstName, $lastName)`,
      {
        $firstName: body.firstName,
        $lastName: body.lastName,
      }
    );
    if (body.plusOneFirstName) {
      db.run(
        `INSERT INTO rsvps(firstName, lastName) VALUES ($firstName, $lastName)`,
        {
          $firstName: body.plusOneFirstName,
          $lastName: body.plusOneLastName,
        }
      );
    }

    res.sendStatus(204);
  } catch {
    res.sendStatus(500);
  }
});

app.get("/all_rsvps", (_, res) => {
  db.all(`SELECT * from rsvps`, (err, rows) => {
    if (err) {
      res.sendStatus(500);
    }

    res.send(rows);
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
