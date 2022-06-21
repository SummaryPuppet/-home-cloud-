import api from "./api/api"

const isExits = async(dir: boolean, name: String)=>{
  const res = await api.getApi("")

  const search = (fileOrDir: boolean)=>{
    if (fileOrDir){
      return true
    } else {
      return false 
    }
  }

  if (dir) {
    search(res.data.content.directories.includes(name))
  } else {
    search(res.data.content.files.includes(name))
  }
}

export default isExits
