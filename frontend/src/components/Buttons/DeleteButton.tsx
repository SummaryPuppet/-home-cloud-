import {useState} from "react"
import {useNavigate, useParams} from "react-router-dom"

import api from "../api/api"

const DeleteButton = (props: any)=>{
  const [path, setPath] = useState("")
  const params = useParams()
  const navigate = useNavigate()

  const reload = ()=>{
    setPath(params.path)
    navigate(path)
  }

  const handleClick = async()=>{
    await api.deleteApi(props.name)
    reload()
  }

  return (
    <div className="mx-6 px-3 py-1 border-2 border-red-600 rounded-md hover:bg-red-500">
      <button className="text-white" onClick={handleClick}>X</button>
    </div>
  )
}


export default DeleteButton
