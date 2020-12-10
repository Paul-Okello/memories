import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();
app.use(cors());
//general 🕵

app.use(
  bodyParser.json({
    limit: "30mb",
    extended: true,
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);
app.use("/posts", postRoutes);
//DataBase Setup
const CONNECTION_URL =
  "mongodb+srv://admin:FMcDNH03td1b0Fmy@cluster0.gzz0g.mongodb.net/memories?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        `Server Running on port : ${PORT} and MongoDB Connected 🚀🚀🚀`
      )
    )
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
