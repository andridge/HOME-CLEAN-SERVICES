
const{Service_details} =  require("./../models");
let self ={};
self.save = async(req,res)=>{
//
try{
//
let body = req.body;
let data = Service_details.create(body);
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
            //let serviceID =  query.params.serviceID;
            let data = await Service_details.findOne({
                attributes:["serviceID","cleanerID","serviceTime","serviceDate","serviceType"],
            where:{
                serviceID:req.query.serviceID
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
    self.updateService_details = async(req,res)=>{
        try{
           // let nationalId = req.params.nationalId;
            let body = req.body;
            //
            let data = await Service_details.update(body,{
                where:{
                    serviceID:req.query.serviceID,
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
            let data = await Service_details.destroy({
                where:{
                    serviceID:req.query.serviceID,
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