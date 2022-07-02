import OpenModal from "./OpenModal"

import Navbar from "./Navbar"
import SubmitForm from "./Forms/SubmitForm"

const HeaderMenu = ()=>{
  return (
    <header className="flex flex-row mb-4 gap-2 bg-gray-100 items-center dark:bg-gray-900" >
      <Navbar/>
      <OpenModal 
        buttonName="Submit"
        buttonStyle="text-2xl my-2 py-2 px-4 border-2 rounded-md hover:bg-indigo-500 dark:text-white dark:border-indigo-500"
      >
        <SubmitForm />
      </OpenModal> 
    </header>
  )
}

export default HeaderMenu
