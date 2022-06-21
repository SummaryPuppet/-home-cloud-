import {useState} from "react"
import {useNavigate, Link} from "react-router-dom"

type FormElement = React.FormEvent<HTMLFormElement>

const Login = ()=>{
  const [email,setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  const emailInput = (value)=>{
    setEmail(value.value)
  }

  const passwordInput = (value)=>{
    setPassword(value.value)
  }

  const handleSubmit = (e:FormElement)=>{
    e.preventDefault()
    navigate("/content")
  }

  const styleInput = "text-center bg-transparent border-2 rounded-md dark:text-white dark:border-gray-500"
  const styleLabel = "text-left text-2xl dark:text-white"

  return (
    <form 
      className="flex flex-col justify-center items-center mx-auto my-4 py-4 max-w-lg gap-6 border-2 rounded dark:border-gray-300 dark:bg-gray-900"
      onSubmit={handleSubmit} 
    >
      <h1 className="text-3xl font-bold dark:text-white">Login</h1>
      <label className={styleLabel}>Email</label>
      <input 
        value={email}
        onChange={emailInput}
        type="email" 
        className={styleInput}
      />
      <label className={styleLabel} >Password</label>
      <input 
        value={password}
        onChange={passwordInput}
        type="password" 
        className={styleInput}
      />
      <button type="submit" className="py-3 px-10 rounded-md dark:text-white dark:bg-black">
        Login
      </button>
      <Link to="/register" >
        register
      </Link>
    </form>
  )
}

export default Login
