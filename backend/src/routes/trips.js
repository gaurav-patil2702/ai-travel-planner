import {Router} from 'express';import crypto from 'crypto';import Trip from '../models/Trip.js';import {auth} from '../middleware/auth.js';import {generatePlan} from '../services/aiPlanner.js';
const router=Router();
router.post('/generate',async(req,res)=>{try{res.json({plan:await generatePlan(req.body)})}catch(e){res.status(500).json({message:e.message})}});
router.post('/',auth,async(req,res)=>{try{const{title,request,plan}=req.body;const trip=await Trip.create({user:req.user.id,title:title||`Trip to ${request.destination}`,request,plan,shareToken:crypto.randomBytes(12).toString('hex')});res.json({trip})}catch(e){res.status(500).json({message:e.message})}});
router.get('/',auth,async(req,res)=>res.json({trips:await Trip.find({user:req.user.id}).sort({createdAt:-1}).select('title request plan.summary shareToken createdAt')}));
router.get('/share/:token',async(req,res)=>{const trip=await Trip.findOne({shareToken:req.params.token}).select('title request plan createdAt');if(!trip)return res.status(404).json({message:'Shared trip not found'});res.json({trip})});
router.get('/:id',auth,async(req,res)=>{const trip=await Trip.findOne({_id:req.params.id,user:req.user.id});if(!trip)return res.status(404).json({message:'Trip not found'});res.json({trip})});
export default router;
