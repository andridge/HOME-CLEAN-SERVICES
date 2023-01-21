
const{Requests} =  require("../models");
let self ={};
self.save = async(req,res)=>{
//
try{
//
let body = req.body;
let data = Requests.create(body);
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
            //let cleanerID =  query.params.cleanerID;
            let data = await Requests.findOne({
                attributes:["cleanerID","customers","service",],
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
    self.updateRequests = async(req,res)=>{
        try{
           // let nationalId = req.params.nationalId;
            let body = req.body;
            //
            let data = await Requests.update(body,{
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
          //  let nationalId = req.params.nationalId;
            let data = await Requests.destroy({
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