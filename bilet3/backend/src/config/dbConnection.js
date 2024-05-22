import mongoose from "mongoose";

mongoose.connect(process.env.MongoURL).then(() => {
    console.log("Server connected Mongoosee...")
}).catch(() => {
    console.log("Server not connected Mongoosee..")
})