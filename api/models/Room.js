import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
    price:{
        type:Number,
        required:true
    },
    maxPeople:{
        type:Number,
        required:true
    },
    title:{
        type: String,
        required:true
    },
    desc:{
         type: String,
         required:true
    },
   roomNumbers:[{number:Number,unavailableDates:[{type:Date}] }]
}
,
    {timestamps:true})


export default mongoose.model("Room",RoomSchema)