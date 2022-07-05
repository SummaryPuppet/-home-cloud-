import { useState, useRef } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import Warning from '../Warning';

import api from '../api/api'

type FormElement = React.FormEvent<HTMLFormElement>

const SubmitForm = ()=>{
  const [child, setChild] = useState<HTMLElement>()
  const [path, setPath] = useState("")
  const params = useParams()
  const navigate = useNavigate()
  const fileInput = useRef<MutableRefObject>()

  const reload = ()=>{
    setPath(params.path)
    navigate(path)
  }

  const toBackend = async()=>{
    let formData = new FormData()
    formData.append("file", fileInput.current.files[0])
    await api.submitApi(formData)

    reload()
  }

  const handleAddChild = (alertText: string)=>{
    setChild(<Warning warningText={alertText}/>)
  }

  const isFiles = ()=>{
    if (fileInput.current.value == ""){
      handleAddChild("Not files to submit") 
    } else {
      if (fileInput.current.files[0].name == localStorage.getItem("files")?.includes(fileInput.current.files[0].name)){
        handleAddChild("File already exist!!")
      } else {
        toBackend
      }
    }
  }

  const handleSubmit = (e: FormElement)  =>{
    e.preventDefault();
    isFiles()
  }


  return (
      <form onSubmit={handleSubmit} className="flex flex-col mb-4 gap-2 items-center dark:bg-gray-900" >
        <input 
          type="file" 
          name="files" 
          ref={fileInput} 
          className="my-4 text-lg border-transparent dark:text-white" 
        />
        <button 
          type="submit" 
          className="text-2xl py-2 px-4 mb-2 border-2 rounded-md hover:bg-indigo-500 dark:text-white dark:border-indigo-500"> 
          Submit 
        </button>
        {child}
      </form>
  )
};

export default SubmitForm
