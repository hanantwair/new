import connectDB from "../../DB/connection.js";
import authRouter from "../modules/Auth/Auth.router.js";

const initApp = (app, express) => {
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
