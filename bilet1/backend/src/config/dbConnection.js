import mongoose from "mongoose";

mongoose
  .connect(process.env.MongoURI)
  .then(() => {
    console.log("Server connected Mongoose...");
  })
  .catch(() => {
    console.log("Server not conected Mongoose...");
  });
