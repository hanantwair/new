import connectDB from "../../DB/connection.js";
import authRouter from "../modules/Auth/Auth.router.js";
import cors from "cors";

const initApp = (app, express) => {
  app.use(cors());
  app.use(express.json());
  connectDB();
  app.get("/", (req, res) => {
    return res.status(200).json("Welcome...");
  });

  app.use("/auth", authRouter);

  app.get("*", (req, res) => {
    return res.status(500).json({ message: "Page Not Found!!" });
  });
};

export default initApp;
