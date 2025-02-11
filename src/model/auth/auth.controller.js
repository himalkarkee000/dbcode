
class AuthController{
    register=(req,res,next)=>{
        try {
            const payload = req.body
            res.json({
                result:payload,
                message:"valodation Successfull",
                meta:null
            })
            
        } catch (exception) {
            console.log(exception)
            next(exception)
            
        }
       

       
    }
    login =(req,res,next)=>{
        console.log("i am here")
        res.json({
            result:"hello himal karki",
            message:"himal how are youy",
            meta:null
        })
    }
}

const authCtrl = new AuthController();
module.exports = authCtrl