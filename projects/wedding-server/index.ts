import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("../wedding-client/public"));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
