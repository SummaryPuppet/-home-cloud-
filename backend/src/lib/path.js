const path = require('path')
const storage = require('../storage')

const slash = process.platform === 'win32' ? '\\' : '/'

const processPath = (urlPath)=>{
  const relativePath = urlPath ? urlPath.replace('-', slash) : slash
  const absolutePath = path.join(storage, relativePath)
  console.log(relativePath)
  console.log(absolutePath)

  return {relativePath, absolutePath}
}

module.exports = processPath
