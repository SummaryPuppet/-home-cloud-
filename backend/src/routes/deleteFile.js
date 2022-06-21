const router = require('express').Router()
const mime = require('mime-types')

const deleteDir = require("../lib/deleteDirectory")
const deleteFile = require("../lib/deleteFile")

const processPath = require('../lib/path')

router.delete('/:path?', async(req, res) => {
  const dirPath = processPath(req.params.path)
  const mimetype = mime.lookup(dirPath.relativePath)

  try{
    if (mimetype){
      deleteFile(dirPath.absolutePath)
      res.json({ success: true, message: "File is deleted" })
    } else{
      deleteDir(dirPath.absolutePath)
      res.json({success: true, message: "Directory is deleted"})
    }
  } catch (err){
    console.error(err)
    res.json({success: false})
  }
})

module.exports = router
