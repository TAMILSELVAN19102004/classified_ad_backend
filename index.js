import express, { urlencoded } from "express";
import mongoose from "mongoose";
import { router } from "./routes/loginRoute.js";
import router1 from "./routes/ProductRoute.js";
import router2 from "./routes/mobileRoute.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://Tamilselvan25:Tamil2004@cluster0.axozp.mongodb.net/classifield_ads?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Db connected"))
  .catch((err) => console.log("Db connection error: ", err));
app.get("/", (req, res) => {
  res.send("Tamilselven");
});

app.use("/data", router);
app.use("/data", router1);
app.use("/data",router2);
app.listen(5000, () => {
  console.log("Server is running on port 5000");
})