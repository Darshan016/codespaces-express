import mongoose, { mongo } from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})

const OrderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    orderItems:{
        type:[orderItemSchema]
    },
    status:{
        type:String,
        enum:['PENDING',"CANCELLED","DELIVERED"],
        default:'PENDING'
    },
    address:{
        type:String,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})

export const Order = mongoose.model('Order',OrderSchema)