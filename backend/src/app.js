const express = require("express")
const cors = require("cors")
const morgan = require('morgan')

const app = express()

app.set('port', process.env.PORT || 5000)

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// basic routes
app.get('/', (req,res) => res.json({message: "hola"}))
app.use('/api/download' , require("./routes/download"))
app.use('/api/upload', require("./routes/upload"))
app.use('/content', require("./routes/content"))
app.use('/api/mkdir', require("./routes/mkdir"))
app.use('/api/delete', require("./routes/deleteFile"))

// user routes
app.use('/api/register', require("./routes/register"))

app.listen(app.get('port'), ()=>{
  console.log(`Server on port: ${app.get('port')}`)
})
