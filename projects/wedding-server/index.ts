import express from "express";
import * as path from "path";

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, "../wedding-client/build")));

app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../wedding-client/build/index.html"));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
