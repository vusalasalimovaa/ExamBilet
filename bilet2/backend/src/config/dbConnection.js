import mongoose from "mongoose";


mongoose.connect(process.env.MongoURI).then(() => {
    console.log("Server connect Mongoose..")
}).catch(() => {
    console.log("Server not connected Mongoose...")
})