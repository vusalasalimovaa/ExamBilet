import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    image:{
        type:String,
        required:true,
        trim:true
    }
},
{collection:"Menu"}
)

const Menu = mongoose.model("Menu", menuSchema)
export default Menu