import axios from 'axios'
class Axios {
    constructor(){
    }
    get(path,params){
        return axios.get(path,params)
    }
    post(path,params){
        return axios.post(path,params)
    }
}
export default InsertArticle = (data) => {Axios.get('',data)}