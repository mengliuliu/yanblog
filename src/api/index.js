import request from '../utils/request'
export default {
    getBlogList(params){
        return request.get('/api/blog/list',{
            params
        })
    },
    getBlogDetail(params){
        return request.get('/api/blog/detail',{
            params
        })
    }



}