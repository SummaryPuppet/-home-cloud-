import OpenModal from "./OpenModal"

import Navbar from "./Navbar"
import SubmitForm from "./Forms/SubmitForm"
import MakeDirectory from "./MakeDirectory"

const HeaderMenu = ()=>{
  const styleButton = "border-2 rounded-md text-2xl dark:text-white xl:bg-transparent"

  return (
    <header className="flex sm:flex-col xl:flex-row mb-4 gap-2 bg-gray-100 items-center dark:bg-gray-900" >
      <Navbar/>
      <OpenModal 
        buttonName="Submit"
        buttonStyle={`${styleButton} my-2 px-4 py-2 hover:bg-indigo-500 dark:border-indigo-500`}
      >
        <SubmitForm />
      </OpenModal> 
      <OpenModal
        buttonName="Make Directory"
        buttonStyle={`${styleButton} mb-3 px-20 py-2 border-emerald-500 bg-emerald-500 hover:bg-emerald-500`}
      >
        <MakeDirectory />
      </OpenModal>
    </header>
  )
}

export default HeaderMenu
