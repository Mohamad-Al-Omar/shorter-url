const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON data in the request body
app.use(express.json());

// GET service
app.get("/api/:inputString", (req, res) => {
  const inputString = req.params.inputString;
  const redirectUrl = `https://www.example.com/?input=${inputString}`;
  res.redirect(redirectUrl);
});

// POST service
app.post("/api", (req, res) => {
  const inputData = req.body;
  const outputData = {
    message: `You sent: ${inputData.url}`,
    status: "success",
  };
  res.json(outputData);
});

// Redirect service
app.get("/:shortId", (req, res) => {
  const shortId = req.params.shortId;
  const inputUrl = urlDatabase[shortId];
  if (inputUrl) {
    res.redirect(inputUrl);
  } else {
    res.status(404).send("Short URL not found");
  }
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
