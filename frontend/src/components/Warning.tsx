import {useEffect, useState} from "react"

const Warning = (props: any)=>{
  const [activate, setActivate] = useState(false)
  const [style, setStyle] = useState("")

  const handleClick = ()=>{
    activate
      ? setActivate(false)
      : setActivate(true)

    if (activate){
      setStyle("hidden")
    } else {
      setStyle("")
    }
  }
  useEffect(()=>{
    setActivate(false)
  }, [props.warningText] )

  useEffect(()=>{
    setActivate(false)
  }, [])

    return (
      <p className={`mb-4 px-10 py-1 text-white ${style} border-2 border-red-800 rounded-md bg-red-500`} >
      {props.warningText}
      <button 
        onClick={handleClick}
        className=" py-1 px-2 text-white bg-red-800 rounded-md"
      >
        x
      </button>
      </p>  
  )
}

export default Warning
