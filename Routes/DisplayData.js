const express = require("express");
const router = express.Router();
const Order = require("../models/orders");1

router.post("/OrderData", async (req, res) => {
   
        let data= req.body.order_data;
        await data.splice(0,0,{Order_date:req.body.order_date})
     
   let id=await Order.findOne({'email':req.body.email})
   console.log(id);
   if(id===null){
    try{
        await Order.create({
            email:req.body.email,
            order_data:[data]
        }).then(()=>{
            res.json({sucess:true})
        })
    
    }
    catch(err){
        console.log(err.message)
        res.send("Server Error");
    }
   }
   else{
     try{
       await Order.findOneAndUpdate({email:req.body.email},
        {$push:{order_data:data}}).then(()=>{
            res.json({sucess:true})
        }) 
     }
     catch(err){
        res.send("Server Error")
     }
   }
   
  });
  module.exports=router;