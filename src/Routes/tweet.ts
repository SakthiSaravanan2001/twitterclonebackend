import { Router } from "express";
const router =Router();


//end point as root and i
//post is for creating here i am trying to create a user
router.post('/',(req,res)=>{
    res.status(501).json({error:'not implemented'})
})

//list
router.get('/',(req,res)=>{
    res.status(501).json({error:'not implemented'})
})
//create one tweet
router.get('/:id',(req,res)=>{
    const {id}=req.params;
    res.status(501).json({error:`not implemented: ${id}`})
})

//updated tweet
router.put('/:id',(req,res)=>{
    const {id}=req.params;
    res.status(501).json({error:`not implemented: ${id}`})
})

//delete tweet
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    res.status(501).json({error:`not implemented: ${id}`})
})

export default router;