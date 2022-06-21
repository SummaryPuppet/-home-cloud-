const fs = require('fs')

const deleteDir = (path)=>{
  return new Promise((resolve, reject)=>{
    fs.promises.access(path)
      .then(()=>{
        fs.rmdir(path, (err)=>{
          if(err){
            reject(err)
          } else {
            resolve()
          }})
        })
      .catch((err) => console.error(err))
  })
}

module.exports = deleteDir
