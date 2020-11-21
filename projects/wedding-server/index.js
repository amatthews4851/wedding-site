"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var sqlite3_1 = __importDefault(require("sqlite3"));
var db = new sqlite3_1.default.Database("./rsvps.db");
db.run("CREATE TABLE IF NOT EXISTS rsvps (\n\tfirstName TEXT NOT NULL,\n\tlastName TEXT NOT NULL\n);");
var app = express_1.default();
var port = 3000;
app.use(express_1.default.static("../wedding-client/public"));
app.use(body_parser_1.default.json());
app.post("/rsvp", function (req, res) {
    var body = req.body;
    if (!body.firstName ||
        !body.lastName ||
        (body.plusOneFirstName && !body.plusOneLastName) ||
        (!body.plusOneFirstName && body.plusOneLastName)) {
        res.status(422);
        res.send({
            error: "Invalid Body",
        });
        return;
    }
    try {
        db.run("INSERT INTO rsvps(firstName, lastName) VALUES ($firstName, $lastName)", {
            $firstName: body.firstName,
            $lastName: body.lastName,
        });
        if (body.plusOneFirstName) {
            db.run("INSERT INTO rsvps(firstName, lastName) VALUES ($firstName, $lastName)", {
                $firstName: body.plusOneFirstName,
                $lastName: body.plusOneLastName,
            });
        }
        res.sendStatus(204);
    }
    catch (_a) {
        res.sendStatus(500);
    }
});
app.get("/all_rsvps", function (_, res) {
    db.all("SELECT * from rsvps", function (err, rows) {
        if (err) {
            res.sendStatus(500);
        }
        res.send(rows);
    });
});
app.listen(port, function () {
    console.log("App listening at http://localhost:" + port);
});
