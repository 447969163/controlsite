import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1'
// 新增文章接口
export default createArticleRequest = (data) => {axios.post('/backstage/artile/createarticle',data)}
// 更新文章接口
export default updateArticleRequest = (data) => {axios.post('/backstage/artile/updatearticle',data)}
// 删除文章接口
export default deletArticleRequest = (data)=>{axios.post('/backstage/artile/deletArticle',data)}