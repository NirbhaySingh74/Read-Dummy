import express from "express";
import cors from "cors";
import fs from "fs";
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.get("/info", (req, res) => {
  // Read the contents of user.json
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading user.json:", err);
      res.status(500).send("Error reading user.json");
      return;
    }

    try {
      // Parse the JSON data
      const users = JSON.parse(data);
      // Send the parsed data as a JSON response
      res.json(users);
    } catch (parseError) {
      console.error("Error parsing user.json:", parseError);
      res.status(500).send("Error parsing user.json");
    }
  });
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
