import express from "express";

const app = express();

app.use(express.json());

app.post("/", (req, res) => {});

app.listen(3333);
