const router = require("express").Router()
const fileUpload = require("express-fileupload")

const mvFile = require('../lib/mv.js')

router.use(fileUpload())

router.post("/", async(req,res)=>{
  if (!req.files){
    res.status(400).json({
      success: false,
      message: "not file"
    })
  } 


  try{
    mvFile(req.files.file)
  } catch (err) {
    console.log(err)
  }

  res.json({ message: "recived" })
})


module.exports = router
