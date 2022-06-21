import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const NavigatorForm = ()=>{
  const [rute, setRute] = useState()
  const navigate = useNavigate()

  const handleChange = (e: any) =>{
    setRute(e.target.value)
  }

  const handleClick = (route: String)=>{
    navigate(route)
  }

  const clickNext = ()=>{
    handleClick(rute)
  }

  const clickHome = ()=>{
    handleClick("/")
  }

  return (
    <nav className="flex flex-row mt-2 mb-4">
      <button className="mx-4 dark:text-white" onClick={clickHome} >home</button>
      <input onChange={handleChange} value={rute} className="bg-transparent border-2 border-gray-500 rounded-md dark:text-white" />
      <button className="mx-4 dark:text-white" onClick={clickNext} type="submit" >Next</button>
    </nav>
  )
}

export default NavigatorForm
