const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = process.env.port || 9000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      Image: "https://placeimg.com/64/64/any",
      name: "wjdxoals",
      birthday: "960417",
      gender: "male",
      job: "job seeker",
    },
    {
      id: 2,
      Image: "https://placeimg.com/64/64/any",
      name: "klopp",
      birthday: "6958523",
      gender: "male",
      job: "manager",
    },
    {
      id: 3,
      Image: "https://placeimg.com/64/64/any",
      name: "calmdown_man",
      birthday: "78235656",
      gender: "male",
      job: "streamer",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
