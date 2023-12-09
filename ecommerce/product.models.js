import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true

    },
    productImage:{
        type:String,
        required:false
    },
    price:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    stock:{
        type:Number,
        default:0
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})