import mongoose from 'mongoose';
export async function connectDB(){ if(!process.env.MONGODB_URI)return false; await mongoose.connect(process.env.MONGODB_URI); console.log('MongoDB connected'); return true; }
