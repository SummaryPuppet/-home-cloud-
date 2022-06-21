import {useState} from "react"

import DeleteButton from '../Buttons/DeleteButton'
import DownloadButton from "../Buttons/DownloadButton"

const DropdownMenu = (props: any)=>{
  const [open, setOpen] = useState(false)

  const dropdown = ()=>{
    if (!open){
      setOpen(true)
    } else {
      setOpen(false)
    }
  }
  
  return (
    <div>
      <button onClick={dropdown} className="hover:text-gray-900 hover:bg-white" >▼</button>
      <dialog open={open} className="bg-gray-900 border-2 border-gray-500 rounded-xl">
        {
          props.directory 
            ? <DeleteButton name={props.name} />
            : (<div>
                <DownloadButton name={props.name} />
                <DeleteButton name={props.name} />
              </div>)
        }
      </dialog>
    </div>
  )
}

export default DropdownMenu
