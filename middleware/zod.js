const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());
const schemas = zod.object({
  email: zod.string(),
  password: zod.string(),
  country: zod.literal("IN").or(zod.literal("US")),
});
app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidney = req.body.kidney;
  const check = schema.safeParse(kidney);
  res.send({ check });
});

app.listen(3000);
