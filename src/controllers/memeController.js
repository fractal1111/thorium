let axios = require("axios")



let memesController = async function(res,req){

    try{
        let id = req.query.id
        let text0 =req.query.text0
        let text1 =req.query.text1
        let userName =req.query.userName
        let pass = req.query.pass

        let options={
            method : "post",
            url : `https://api.imgflip.com/caption_image?tempelate_id=${id}&text0=${text0}&text1=${text1}&username=${userName}&password=${pass}`

        }
    
    let result = await axios(options)
    res.status(200).send({data : result.data})
    
    }
    catch(err){
      res.status(500).send({ERROR:err.message})
    }



}


module.exports.memesController=memesController