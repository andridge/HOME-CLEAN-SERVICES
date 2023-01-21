
const{Customer} =  require("./../models");
let self ={};
self.save = async(req,res)=>{
//
try{
//
let body = req.body;
let data = Customer.create(body);
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
            let data = await Customer.findOne({
                attributes:["customerFirstname","customerLastname","customerAddress","customerPhone","customerEmail"],
            where:{
                customerID:req.query.customerID
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
    self.updateCustomer = async(req,res)=>{
        try{
           // let nationalId = req.params.nationalId;
            let body = req.body;
            //
            let data = await Customer.update(body,{
                where:{
                    customerID:req.query.customerID,
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
            let data = await Customer.destroy({
                where:{
                    customerID:req.query.customerID,
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