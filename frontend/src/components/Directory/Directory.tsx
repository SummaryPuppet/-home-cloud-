import {Link} from "react-router-dom"

import DropdownMenu from "../DropdownMenu/DropdownMenu"

const Directory = (props: any)=>{
  return (
    <div className="flex flex-row justify-center items-center">
      <Link to={props.name}  >
        {props.name}
      </Link>
      <DropdownMenu name={props.name} directory={true} />
    </div>
  )
}

export default Directory
