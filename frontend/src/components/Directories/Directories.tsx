import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"

import api from "../api/api"

import Directory from "../Directory/Directory"
import DropdownMenu from "../DropdownMenu/DropdownMenu"
import OpenModal from "../OpenModal/OpenModal"
import MakeDirectory from "../MakeDirectory/MakeDirectory"

const Directories = ()=>{
  const [directories, setDirectories] = useState([])
  const [files, setFiles] = useState([])
  const params = useParams()

  const getData = async(param: String)=>{
    const request = await api.getApi(param) 
    
    setDirectories(request.data.content.directories)
    setFiles(request.data.content.files)
  }

  const isPath = ()=>{
    if (params.path == undefined){
      getData("")
    } else {
      getData(params.path)
    }
  }


  useEffect(()=>{
    isPath()
  }, [params])

  const style = "text-lg px-20 py-2 border-2 border-gray-400 rounded-md mb-3 flex lg:flex-row dark:text-white dark:border-gray-500 dark:bg-gray-900"

  return (
    <main className="flex flex-col justify-center items-center" >
      <OpenModal 
        buttonName="Make Directory" 
        buttonStyle="mb-3 px-20 py-2 border-2 border-emerald-500 rounded-md text-2xl bg-emerald-500 xl:bg-transparent hover:bg-emerald-500 dark:text-white" 
      >
        <MakeDirectory />
      </OpenModal>
      <div className="flex xl:flex-row flex-col gap-4" >
        {
          directories.map((directory, index) => (
            <div className={style} key={index}>
              <Directory name={directory} />
            </div>
          ))
        }
      </div>
      <div className="flex xl:flex-row flex-col gap-4">
        {
          files.map((file, index)=> (
            <div className={style} key={index} >
              {file}
              <DropdownMenu name={file} directory={false} />
            </div>
          ))
        }
      </div>
    </main>
  )
}

export default Directories
