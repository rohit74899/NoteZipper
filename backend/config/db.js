//Connection file to mongo db
import mongoose from "mongoose";
import colors from "colors";


const URL="mongodb+srv://Rohan:12345@cluster0.9kteqvb.mongodb.net/Notezipper?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

export default connectDB;
