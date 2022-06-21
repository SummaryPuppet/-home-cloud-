const router = require('express').Router()

router.post("/", (req, res)=>{
  const { userName, email, password } = req.body 
  const user = req.body
  console.log({userName, email, password})

  console.log(user.userName)

  res.json({sucess: true, message: "User created"})
  
})

module.exports = router
