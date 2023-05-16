const express = require("express");
const cors = require("cors");
const { Deta } = require("deta");

const app = express();
const port = process.env.PORT;

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON data in the request body
app.use(express.json());

// Regular expression to validate URLs
const urlRegex =
  /^(?:https?:\/\/)?(?:www\.)?[\w.-]+\.[a-z]{2,}(?:\/[\w.-]*)*(?:\?[\w.%&+=-]+)?(?:#[\w-]*)?$/i;

// Initialize with a Project Key
// locally, set the project key in an env var called DETA_PROJECT_KEY
const deta = Deta(process.env.PROJECT_KEY);

// This how to connect to or create a database.
const linksDB = deta.Base("links");

// GET service
app.get("/json/:inputString", async (req, res) => {
  const inputString = req.params.inputString;
  const { items } = await linksDB.fetch({ shortId: inputString });
  const rootUrl = `${req.protocol}://${req.get("host")}`;
  const shortUrl = `${rootUrl}/api/${inputString}`;
  const successResponse = {
    data: {
      url: items[0].url,
      short_url: shortUrl,
    },
    success: true,
  };
  res.json(successResponse);
});

// POST service
app.post("/", async (req, res) => {
  const { url } = req.body;

  if (!urlRegex.test(url)) {
    res.status(400).json({ message: "Invalid URL", success: false });
    return;
  }
  const { nanoid } = await import("nanoid");
  const shortId = nanoid(8);
  const rootUrl = `${req.protocol}://${req.get("host")}`;
  const shortUrl = `${rootUrl}/api/${shortId}`;
  await linksDB.put({
    shortId: shortId,
    url: url,
    key: shortId,
  });
  const successResponse = {
    data: {
      new_url: shortUrl,
      short_id: shortId,
    },
    success: true,
  };
  res.json(successResponse);
});

// Redirect service
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const { items } = await linksDB.fetch({ shortId: shortId });
  const inputUrl = items[0]?.url;
  console.log("inputUrl => ", inputUrl);
  if (inputUrl) {
    res.redirect(inputUrl);
  } else {
    res.status(404).send("Short URL not found");
  }
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
