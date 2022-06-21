const fs = require('fs')
const storage = require('../storage')

const mvFile = (file)=>{
  return new Promise((resolve,reject)=>{
    fs.promises.access(`${storage}/${file.name}`)
      .then( ()=> reject(new Error(`File ${file.name} already exists`)))
      .catch( ()=>{
        file.mv(`${storage}/${file.name}`, (err)=>{
          if (err){
            reject(err)
          } else {
            resolve()
          }
        })
    })
  })
}

module.exports = mvFile
