import mongoose, { mongo } from "mongoose";

const patientSchema = new mongoose.Schema(
    {

        name:{
            type:String,
            required:true,
    },
    gender:{
        type:String,
        enum:['M','F']
    },
    bloodGroup:{
        type:String,
        required:true
    },
    diagnosedWith:{
        type:String,
        required:true
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }
},
{timestamps:true})

export const Patient = mongoose.model('Patient', patientSchema)