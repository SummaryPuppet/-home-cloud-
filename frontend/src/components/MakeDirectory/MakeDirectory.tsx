import {useState} from "react"
import {useNavigate, useParams} from "react-router-dom"

import api from "../api/api"
import isExits from "../isExists"
import Warning from "../Warning"

const MakeDirectory = ()=>{
  const [name, setName] = useState("")
  const [path, setPath] = useState("")
  const [child, setChild] = useState()

  const params = useParams()
  const navigate = useNavigate()

  const reload = ()=>{
    setPath(params.path)
    navigate(path)
  }

  const createDir = async()=>{
    if (params.path == undefined){
      await api.mkdirApi('/', name)
    } else {
      await api.mkdirApi(params.path, name)
    }
  }

  const handleAddChild = (alertText: String)=>{
    setChild(<Warning warningText={alertText} />)
  }


  const handleClick = async()=>{
    if (!name){
      handleAddChild("Name is undefined")
    } else {
      if (isExits(true, name)){
        handleAddChild("Directory is exists")
      } else {
        createDir()
      }
    } 
    setName("")
    reload()
  }
  
  const handleInput = (e: any)=>{
    setName(e.target.value)
  }

  return(
    <div className="py-2 px-4 mb-4 flex flex-col gap-7" >
      <header className="text-3xl dark:text-white" >Make Directory</header>
      <input 
        className="bg-transparent border-2 border-gray-500 rounded-md dark:text-white" 
        onChange={handleInput}
        value={name} 
      />
      <button 
        className="text-lg bg-emerald-500 rounded-md dark:text-white" 
        onClick={handleClick}
      >
      Create Directory
      </button>
      {child}
    </div>
  )
}

export default MakeDirectory
