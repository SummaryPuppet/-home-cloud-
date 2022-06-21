const { Router } = require("express")
const mime = require("mime-types")

const processPath = require('../lib/path')

const router = Router()

router.get('/:path?', (req,res)=>{ 
  const path = processPath(req.params.path)
  const file = path.absolutePath

  const mimetype = mime.lookup(file)
  console.log(mimetype)

  res.setHeader('Content-Disposition', `attachment; filename=${file}`)
  res.setHeader('Content-Type', mimetype)
  res.download(file)
})

module.exports = router
