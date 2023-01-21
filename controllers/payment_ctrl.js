
const{Payment} =  require("../models");
let self ={};
self.save = async(req,res)=>{
//
try{
//
let body = req.body;
let data = Payment.create(body);
return res.json({
            status:"ok",
            data:data
        })
}catch(error){
        res.status(500).json({
            status:"error",
            data:error
        })
    }
    }
    ///
self.get = async(req,res)=>{
        try{
            //let paymentID =  query.params.paymentID;
            let data = await Payment.findOne({
                attributes:["paymentID","paymentType","paymentAmount","paymentDate"],
            where:{
                paymentID:req.query.paymentID
            },
            });
            return res.json({
                status:"ok",
                data:data,
            });
        }catch(error){
            res.status(500).json({
                status:"error",
                data:error
            })
        }
        
    }
    self.updatePayment = async(req,res)=>{
        try{
           // let nationalId = req.params.nationalId;
            let body = req.body;
            //
            let data = await Payment.update(body,{
                where:{
                    paymentID:req.query.paymentID,
                }, 
            })
            return res.json({
                status:"ok",
                data:data,
    
            })
        }catch(error){
            res.status(500).json({
                status:"error",
                data:error
            })
        }
    }
    self.delete = async(req,res)=>{
        try{
          //  let nationalId = req.params.nationalId;
            let data = await Payment.destroy({
                where:{
                    paymentID:req.query.paymentID,
                }
            });
            return res.json({
                status:"ok",
                data:data
            })
        }catch(error){
            res.status(500).json({
                status:"error",
                data:error
            })
        }
    }
//export models
module.exports = self;