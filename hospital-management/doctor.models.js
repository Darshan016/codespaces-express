import mongoose, { mongo } from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number
    },
    experienceInYears:{
        type:Number,
        default:0
    },
    Classification:{
        type:String,
        required:true
    },
    worksInHospital:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Hospital'
        }
    ]
},{timestamps:true})

export const Doctor = mongoose.model('Doctor', doctorSchema)