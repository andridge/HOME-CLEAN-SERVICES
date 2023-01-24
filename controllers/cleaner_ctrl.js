
const{Cleaner} =  require("./../models");
let self ={};
self.save = async(req,res)=>{
//
try{
//
let body = req.body;
let data = Cleaner.create(body);
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
            let data = await Cleaner.findOne({
                attributes:["cleanerFirstname","cleanerLastname","cleanerAddress","cleanerPhone","cleanerEmail","latitude","longitude"],
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
    //
    self.getCleaners = async(req,res)=>{
        try{
            //let cleanerID =  query.params.cleanerID;
            let data = await Cleaner.findAll({
                attributes:["cleanerFirstname","cleanerLastname","cleanerAddress","cleanerPhone","cleanerEmail","latitude","longitude"],
            where:{
                cleanerAddress:req.query.cleanerAddress
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
    self.updateCleaner = async(req,res)=>{
        try{
           // let nationalId = req.params.nationalId;
            let body = req.body;
            //
            let data = await Cleaner.update(body,{
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
          //  let nationalId = req.params.nationalId;
            let data = await Cleaner.destroy({
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