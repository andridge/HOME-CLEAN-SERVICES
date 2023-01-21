
const{Inventory} =  require("./../models");
let self ={};
self.save = async(req,res)=>{
//
try{
//
let body = req.body;
let data = Inventory.create(body);
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
            let data = await Inventory.findOne({
                attributes:["inventoryID","inflow","outflow","stock","cleaners"],
            where:{
                inventoryID:req.query.inventoryID
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
    self.updateInventory = async(req,res)=>{
        try{
           // let nationalId = req.params.nationalId;
            let body = req.body;
            //
            let data = await Inventory.update(body,{
                where:{
                    inventoryID:req.query.inventoryID,
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
            let data = await Inventory.destroy({
                where:{
                    inventoryID:req.query.inventoryID,
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