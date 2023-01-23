
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
         //   let serviceID =  query.params.id;
            let data = await Service_details.findOne({
                attributes:["serviceID","cleanerID","serviceTime","serviceDate","serviceType"],
            where:{
                id:req.query.id
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
           //let id = req.params.id;
            let body = req.body;
            //
            let data = await Service_details.update(body,{
                where:{
                    id:req.query.id,
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
          // let id = req.params.id;
            let data = await Service_details.destroy({
                where:{
                    id:req.query.id,
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