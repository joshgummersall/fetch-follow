import cors from 'cors';
import express from "express";

const app = express();

app.use(cors());

app.get("/bar", (_, res) => {
  res.json({ success: true });
});

app.listen(3001, () => {
  console.log("listening on 3001...");
});
