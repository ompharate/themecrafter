import mongoose from "mongoose";
export const connectionToMongoDb = async () => {
  return mongoose.connect(process.env.MONGO_URL).then(function () {
    console.log("Connected to MongoDB");
  });
};
