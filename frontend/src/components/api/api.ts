import axios from "axios";

class Api {
  constructor(){
    this.api = axios.create({baseURL: 'http://localhost:5000'})
  }

  async getApi(path: String){
    return await this.api.get(`/content/${path}`)
  }

  async submitApi(formData: FormData){
    await this.api.post("/api/upload", formData , {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  } 

  async downloadApi(file: String){
    return await this.api.get(`/api/download/${file}`, {responseType: 'blob'})
  }

  async deleteApi(path: String){
    await this.api.delete(`/api/delete/${path}`)
  }

  async mkdirApi(path: String, name: String){
    await this.api.post(`/api/mkdir/${path}`, {name}, {
      'Content-Type': "application/json"
    })
  }
}

const api = new Api()

export default api
