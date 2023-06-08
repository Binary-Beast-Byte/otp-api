const express = require("express");

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());


const PORT = process.env.PORT || 5000;

//multer path
const db = require("./models");

const cors = require("cors");

app.use((req, res, next) => {
  const allowedOrigins = ["http://localhost:5173", "http://localhost:3001"];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
  res.header("Access-Control-Allow-Methods", [
    "GET",
    "OPTIONS",
    "UPDATE",
    "POST",
    "DELETE",
  ]);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, accesstoken"
  );
  res.header("Access-Control-Allow-Credentials", true);
  return next();
});

const userRoutes = require("./routes/user.routes")
app.use("/user", userRoutes)


db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
