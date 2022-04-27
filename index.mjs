import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/foo", (_, res) => {
  res.redirect("http://localhost:3001/bar", 302);
});

app.listen(3000, () => {
  console.log("listening on 3000...");
});
