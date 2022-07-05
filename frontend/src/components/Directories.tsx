import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"

import api from "./api/api"

import Directory from "./Directory"
import DropdownMenu from "./DropdownMenu"

const Directories = ()=>{
  const [directories, setDirectories] = useState([])
  const [files, setFiles] = useState([])
  const params = useParams()

  const getData = async(param: String)=>{
    const {data} = await api.getApi(param) 
    
    setDirectories(data.content.directories)
    setFiles(data.content.files)

    localStorage.setItem("directories", data.content.directories)
    localStorage.setItem("files", data.content.files)
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

  const style = "text-center text-lg px-20 py-2 border-2 border-gray-400 rounded-md mb-3 flex lg:flex-row dark:text-white dark:border-gray-500 dark:bg-gray-900"

  return (
    <main className="sm:flex sm:flex-col md:grid md:grid-cols-3 xl:grid xl:grid-cols-5 grid-rows-5 place-items-stretch gap-3" >
        {
          directories.map((directory, index) => (
            <div className={style} key={index}>
              <Directory name={directory} />
            </div>
          ))
        }
        {
          files.map((file, index)=> (
            <div className={style} key={index} >
              {file}
              <DropdownMenu name={file} directory={false} />
            </div>
          ))
        }
    </main>
  )
}

export default Directories
