const processPath = require("../lib/path")
const fs = require('fs')
const path = require('path')
const router = require("express").Router()

router.post('/:path?', async(req,res)=>{
  const dirPath = processPath(req.params.path)
  const name = req.body.name

  if (!name){
    return res.status(400).json({
      sucess: false,
      message: "No name"
    })
  }

  try {
    await fs.promises.mkdir(path.join(dirPath.absolutePath, name))
  } catch (err){
    console.error(err)
  }
  

  res.json({sucess: true, message: "Directory created"})
})

module.exports = router
