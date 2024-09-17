const express = require("express");
const productRouter = require("./routes/product");

const server = express();

// bodyParser
server.use(express.json());

// Middleware for logging
server.use((req, res, next) => {
  console.log(req.get("User-Agent"), req.method, req.ip, req.hostname);
  next();
});

// Use the product router
server.use("/api", productRouter);

const auth = (req, res, next) => {
  if (req.body.password == "123") {
    next();
  } else {
    res.sendStatus(401);
  }
};

// API - Endpoint - Route
// server.get("/", auth, (req, res) => {
//   res.json({ type: "GET" });
// });

// Start the server
server.listen(8080, () => {
  console.log("server started on port 8080");
});
