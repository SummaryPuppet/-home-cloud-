import FileDownload from 'js-file-download'

import api from "../api/api"

const DownloadButton = (props: any)=>{
  const handleClick = async()=>{
    const request = await api.downloadApi(props.name)
    FileDownload(request.data, props.name)
  }

  return(
    <div>
      <button 
        onClick={handleClick} 
        className="text-white mx-6 py-1 px-2 border-2 border-emerald-500 rounded-md hover:bg-emerald-500">
        Download
      </button>  
    </div>
  )
}

export default DownloadButton
