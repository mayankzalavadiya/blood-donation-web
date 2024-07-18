const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

//dot config
dotenv.config();

//mongodb connect
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//route
// 1 test route
app.use("/api/v1/test", require("./routes/testRoute"));
app.use("/api/v1/auth", require("./routes/authRoute"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

app.get("/", (req, res) => {
  res.send({
    message: "ok run website",
  });
});

//port
const PORT = process.env.PORT || 4002;

//listen
app.listen(PORT, () => {
  console.log(
    `Node server running in ${process.env.DEV_MODE} on port ${process.env.PORT}`
      .bgBlue.white
  );
});
