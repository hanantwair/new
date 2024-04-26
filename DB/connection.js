import { connect } from "mongoose";

const connectDB = async () => {
  return await connect("mongodb+srv://TestHanan123:TestHanan123@test.xnjv9io.mongodb.net/Test")//process.env.DB_LOCAL
    .then(() => {
      console.log("Connecting to Database...");
    })
    .catch((err) => {
      console.log(`Error connecting to Database,${err}`);
    });
};

export default connectDB;
