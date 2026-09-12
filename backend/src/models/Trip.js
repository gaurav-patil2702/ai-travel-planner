import mongoose from 'mongoose';
const schema=new mongoose.Schema({user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},shareToken:{type:String,unique:true,sparse:true},title:String,request:mongoose.Schema.Types.Mixed,plan:mongoose.Schema.Types.Mixed},{timestamps:true});
export default mongoose.model('Trip',schema);
