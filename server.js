const express = require("express");
const bodyParser = require("body-parser");
const app = new express();
const port = process.env.PORT || 10080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/thread", (req, res, next) => {
  setTimeout(() => {
    next();
  }, 3000);
});
app.get("/thread", (req, res) => {
  console.log("access: `/thread`");

  res.status(200).send({
    thread: {
      id: 1,
      title: "thread1",
      comment_count: 1
    },
    comments: [
      {
        id: 1,
        thread_id: 1,
        author: "Fooo",
        password: "xxx",
        datetime: "2018-09-12 20:31:41",
        message: "あああうううああ"
      }
    ]
  });
});

app.get("/bbs", (req, res) => {
  console.log("access /bbs");

  res.status(200).send({
    threads: [
      {
        id: 1,
        title: "thread 1",
        comment_count: 2
      },
      {
        id: 2,
        title: "example 2",
        comment_count: 0
      }
    ]
  });
});

app.listen(port, () => {
  console.log("listen on port " + port);
});
