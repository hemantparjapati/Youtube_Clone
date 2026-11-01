const asyncHandller = (requestHandler)=>{
    (re,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}


export {asyncHandller}









/*

const asyncHandler = (fn)=> async (req,res,next)=>{
    try{ye

    }catch(error){
        res.status(error.code || 500).json({
            success: false,
            messgae:error.message
        })
    }
}
*/



/*asyncHandler ek function hai jo ek function (fn) ko input mein 
leta hai aur ek naya function return karta hai. */