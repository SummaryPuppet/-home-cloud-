const fs = require('fs')

const deleteFile = (path)=>{
  return new Promise((resolve, reject)=>{
    fs.promises.access(path)
      .then(()=>{
        fs.unlink(path, (err)=>{
          if(err){
            reject(err)
          } else {
            resolve()
          }
        })
      })
      .catch((err) => console.error(err))
      })
}


module.exports = deleteFile
