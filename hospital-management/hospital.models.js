import mongoose, { mongo } from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    addressLine1:{
        type:String,
        required:true
    },
    addressLine2:{
        type:String
    },
    city:{
        type:String,
        required:true
    },
    specializedIn:[
        {
            type:String
        }
    ],
    pincode:{
        type:String,
        required:true
    }
},{timestamps:true})

export const hospital = mongoose.model('Hospital', hospitalSchema)