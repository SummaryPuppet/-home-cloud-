require('dotenv').config()

const storage = process.env.STORAGE 

if(!storage){
  console.error("Storage is not defined")
  process.exit(1)
}

module.exports = storage
