
const{ Schedule} = require("./../models");
let self ={};
self.save = async(req,res)=>{
//
try{
//
let body = req.body;
let data = Schedule.create(body);
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
self.get = async(req,res)=>{
        try{
            //let cleanerID =  query.params.cleanerID;
            let data = await Schedule.findOne({
                attributes:["startTime","endTime"],
            where:{
                cleanerID:req.query.cleanerID
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
    self.updateSchedule = async(req,res)=>{
        try{
           
            let body = req.body;
            //
            let data = await Schedule.update(body,{
                where:{
                    cleanerID:req.query.cleanerID,
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
          
            let data = await Schedule.destroy({
                where:{
                    cleanerID:req.query.cleanerID,
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