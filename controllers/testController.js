const testController = (req,res)=>{
    res.status(200).send({
        success:true,
        message:"welcome route"
    })
}

module.exports = {testController}