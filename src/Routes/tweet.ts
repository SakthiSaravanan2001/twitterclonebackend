import {  PrismaClient } from "@prisma/client";
import { Router } from "express";
const router =Router();
const prisma =new PrismaClient();


//end point as root and i 
//post is for creating here i am trying to create a user
router.post('/',async(req,res)=>{
    // const {content,image,userId}=req.body;
    const {content,image}=req.body;
    const authHeader=req.header('authorization')
    const token=authHeader?.split(' ')[1];
    if(!token){
        return res.sendStatus(401)
    }
    console.log(token)
    // console.log(authHeader)
    res.sendStatus(200)
    // try{
    //     const result=await prisma.tweet.create(
    //         {
    //             data:{
    //                 content,
    //                 image,
    //                 userId

    //             }
    //         }

    //     )
    //     res.json(result)
    // }
//     catch{
//         res.status(400).json({error:'not implemented'})
//     }
//     // res.status(501).json({error:'not implemented'})
})

//list
router.get('/',async(req,res)=>{
    const data=await prisma.tweet.findMany({
       include:{user:{
        select:{
            id:true,
            name:true,
            email:true
        }
       }}
    // just a nested query thats it 
        // select:{
        //     id:true,
        //     user:{
        //         select:{
        //             id:true,
        //             name:true,
        //             username:true,

        //         },
                
        //     },
        // }
    });
    
    res.json(data)
})
//create one tweet
router.get('/:id',async(req,res)=>{
    try{
    const {id}=req.params;
    const data= await prisma.tweet.findUnique({where:{id:Number(id)},
    include:{
        user:{
            select:{
                id:true,
                email:true
            }
        }
    }})
    res.json(data)
    }
    catch(e){
        res.status(200).json({error:`not implemented`})
    }
})

//updated tweet
router.put('/:id',async(req,res)=>{
    const {id}=req.params;
    const {content}=req.body;
    try{
        const data=await prisma.tweet.update({
            where :{id:Number(id)},
            data:{
                content,
            }
        })
        res.json(data)
    }
    catch(e){
        res.status(400).json({error:`not updated`})


    }

})

//delete tweet
router.delete('/:id',async(req,res)=>{
    const {id}=req.params;
    await prisma.tweet.delete({where:{id:Number(id)}})
    res.sendStatus(200)
})

export default router;