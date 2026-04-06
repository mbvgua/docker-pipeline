const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// ensure static images are serverd
app.use(express.static("images"));

app.get("/", (request, response) => {
  response.status(200).sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`server runnning on http://localhost:${port}`);
});
