import axios from 'axios'
export default class Axios {
    constructor(setting){
        this.path = setting.path
        this.params = setting.params
    }
    get(){
        return axios.get(this.path,this.params)
    }
    post(){
        return axios.post(this.path,this.params)
    }
}