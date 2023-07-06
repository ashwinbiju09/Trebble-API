const express = require("express");
const treblle = require("@treblle/express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

const port = 4000;

const app = express();
const validateEmail = (email) => {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

app.use(
  treblle({
    apiKey: "bygQyLQOUTexbTLCIFDiNP5SRYt3sHs1",
    projectId: "nxsSgxFvHvo4Eqyu",
    additionalFieldsToMask: [],
  })
);

app.get("/api", (req, res) => {
  res.send("Hello World, from express");
});

// Middleware
app.use(bodyParser.json());
app.use(helmet());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15, // limit each IP to 100 requests per windowMs
});
app.use("/api/", limiter);

const saltRounds = 10;

const users = [
  { id: 1, username: "user1", passwordHash: "" },
  { id: 2, username: "user2", passwordHash: "" },
];

app.post("/api/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const passwordHash = await bcrypt.hash(password, saltRounds);
    const newUser = { id: users.length + 1, username, passwordHash };
    users.push(newUser);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});



app.post("/api/login", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    
    // Email validation
    if (!validateEmail(email)) {
      return res.status(400).json({
        status: false,
        code: 400,
        message: "The API request is invalid. Please refer to the API documentation.",
        errors: {
          email: ["The email must be a valid email address."],
        },
      });
    }
    
    const user = users.find((user) => user.username === username);
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    const passwordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ userId: user.id }, "secret_key");
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/protected", (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "secret_key");
    const userId = decodedToken.userId;
    res.status(200).json({ userId });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Unauthorized" });
  }
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
