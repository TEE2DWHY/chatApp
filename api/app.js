const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { connect } = require("mongoose");
const notFound = require("./middlewares/notFound");
const authRouter = require("./routers/auth");
const userRouter = require("./routers/user");
const errorHandler = require("./middlewares/errorHandler");
const upload = require("./utils/multer");

// middleware(s)
app.use(express.json());
app.use(cors());
app.use("/auth", upload.single("image"), authRouter);
app.use("/user", userRouter);
app.use(errorHandler);
app.use(notFound);

const port = process.env.PORT;

const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

// start connection
start();
