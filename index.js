const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());

const mock_db = require("./mock_db.js");

const authenticateUser = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  if (token.trim() === "") {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }

  const user = {
    id: 1,
    username: "mockUser",
  };

  req.user = user;

  next();
};

app.use(authenticateUser);

app.get("/", (req, res) => {
  res.send(mock_db);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("req.body", req.body);

  if (username === "mockUser" && password === "mockPassword") {
    const token = "mockToken";

    res.json({ message: "Login successful", token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.get("/protected", (req, res) => {
  const user = req.user;
  res.json({ message: "You are authenticated", user });
});

app.post("/add-comment/:postId", (req, res) => {
  const postId = parseInt(req.params.postId);
  const { comment, username } = req.body;

  if (!comment || !username) {
    return res
      .status(400)
      .json({ message: "Comment and username are required" });
  }

  const newComment = {
    id: mock_db.answers.length + 1,
    postId,
    comment,
    username,
  };

  mock_db.answers.push(newComment);

  res.json({ message: "Comment added successfully", comment: newComment });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
